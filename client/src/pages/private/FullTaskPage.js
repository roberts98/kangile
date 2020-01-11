import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import moment from 'moment';
import { Container, Row, Col } from 'react-bootstrap';

import { getTaskRequest } from '../../services/boards.service';
import Layout from '../../components/Layout';
import FullSpinner from '../../components/spinners/FullSpinner';
import { COLOR_PRIMARY, COLOR_WHITE } from '../../contants/styles';
import avatar from '../../assets/avatar.png';
import CommentsForm from '../../components/dashboard/tasks/CommentsForm';
import Comment from '../../components/dashboard/tasks/Comment';

const StyledRow = styled(Row)`
  justify-content: space-between;
`;

const Name = styled.h1`
  font-size: 60px;
  font-weight: 700;
  margin-bottom: 50px;
`;

const Heading = styled.h2`
  font-size: 36px;
  font-weight: 700;
  margin: 20px 0;
`;

const Text = styled.p`
  font-size: 24px;
`;

const Tag = styled.div`
  display: inline-block;
  background-color: ${COLOR_PRIMARY};
  color: ${COLOR_WHITE};
  padding: 10px 18px;
  font-weight: 700;
  border-radius: 10px;
  margin-right: 10px;
`;

const Member = styled.span`
  font-size: 20px;
  margin-left: 30px;
`;

const Date = styled.span`
  font-size: 24px;
  padding-left: 15px;
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
    <Layout withNavbar>
      <Container>
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
      </Container>
    </Layout>
  );
}

export default FullTask;
