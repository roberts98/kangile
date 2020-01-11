import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import { updateTaskRequest } from '../../../services/boards.service';
import { Input } from '../../styled/forms';

function CommentsForm({ handleUpdate, boardId, taskId }) {
  const [value, setValue] = useState('');
  const {
    token,
    user: { _id, username }
  } = useSelector(state => state.auth);

  function handleChange(value) {
    setValue(value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    (async function() {
      const comment = {
        authorId: _id,
        message: value,
        username
      };

      try {
        const res = await updateTaskRequest(
          token,
          boardId,
          taskId,
          'comments',
          comment
        );
        setValue('');
        handleUpdate('comments', res.data.data);
      } catch (error) {
        console.log(error);
      }
    })();
  }

  return (
    <form onSubmit={handleSubmit}>
      <Input
        value={value}
        placeholder="Add comment..."
        onChange={e => handleChange(e.target.value)}
      />
    </form>
  );
}

export default CommentsForm;
