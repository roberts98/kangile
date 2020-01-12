import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import moment from 'moment';
import { Row, Col } from 'react-bootstrap';

import { getTaskRequest } from '../../services/boards.service';
import Layout from '../../components/Layout';
import { FullSpinner } from '../../components/spinners';
import { CommentsForm, Comment } from '../../components/dashboard/tasks';
import {
  COLOR_PRIMARY,
  COLOR_WHITE,
  FONT_HUGE,
  FONT_BIG,
  SMALL_SPACING,
  XXS_SPACING,
  FONT_DEFAULT
} from '../../contants/styles';
import avatar from '../../assets/avatar.png';
import { TopSpacer } from '../../components/styled/common';

const StyledRow = styled(Row)`
  justify-content: space-between;
`;

const Name = styled.h1`
  font-size: ${FONT_HUGE};
  font-weight: 700;
  margin-bottom: ${SMALL_SPACING};
`;

const Heading = styled.h2`
  font-size: ${FONT_BIG};
  font-weight: 700;
  margin-bottom: ${XXS_SPACING};
`;

const Text = styled.p`
  font-size: ${FONT_DEFAULT};
`;

const Tag = styled.div`
  display: inline-block;
  background-color: ${COLOR_PRIMARY};
  color: ${COLOR_WHITE};
  padding: ${XXS_SPACING} ${SMALL_SPACING};
  font-weight: 700;
  border-radius: 10px;
  margin-right: ${XXS_SPACING};
  margin-bottom: ${XXS_SPACING};
`;

const Member = styled.span`
  font-size: ${FONT_DEFAULT};
  margin-left: ${SMALL_SPACING};
`;

const Date = styled.p`
  font-size: ${FONT_BIG};
  margin-bottom: ${SMALL_SPACING};
`;

function FullTask(props) {
  const [task, setTask] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const { token } = useSelector(state => state.auth);
  const {
    match: {
      params: { boardId, taskId }
    }
  } = props;

  useEffect(() => {
    (async function() {
      try {
        setIsLoading(true);
        const res = await getTaskRequest(token, boardId, taskId);
        setTask(res.data.task);
        setIsLoading(false);
      } catch (error) {
        console.log(error.response);
      }
    })();
  }, [boardId, taskId, token]);

  function handleUpdate(key, value) {
    setTask(prevTask => ({ ...prevTask, [key]: value }));
  }

  if (isLoading) {
    return <FullSpinner />;
  }

  return (
    <Layout>
      <TopSpacer>
        <Name>{task.name}</Name>
        <StyledRow>
          <Col md="6">
            <Heading>Description</Heading>
            <Text>{task.description}</Text>
            <Heading>Tags</Heading>
            {task.tags.map(tag => (
              <Tag key={tag}>{tag}</Tag>
            ))}
            <Heading>Created by</Heading>
            <div>
              <img width="75" height="75" src={avatar} alt="avatar" />
              <Member>{task.author.username}</Member>
            </div>
            <div>
              <Heading>Asignee</Heading>
              <img width="75" height="75" src={avatar} alt="avatar" />
              <Member>{task.asignee.username}</Member>
            </div>
          </Col>
          <Col md="5">
            <Heading>Deadline</Heading>
            <Date>{moment(task.deadline).format('DD.MM.YYYY gg:mm')}</Date>
            <Heading>Comments</Heading>
            {task.comments.map(comment => (
              <Comment key={comment._id} comment={comment}>
                {comment.message}
              </Comment>
            ))}
            <CommentsForm
              handleUpdate={handleUpdate}
              boardId={boardId}
              taskId={taskId}
            />
          </Col>
        </StyledRow>
      </TopSpacer>
    </Layout>
  );
}

export default FullTask;
