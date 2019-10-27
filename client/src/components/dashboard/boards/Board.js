import React, { useRef } from 'react';
import { useDrag, useDrop } from 'react-dnd';
import styled from 'styled-components';

const StyledDiv = styled.div`
  width: 300px;
  height: 40px;
  background-color: #0099cc;
  margin-top: 20px;
  margin-right: 20px;
  opacity: ${props => (props.isDragging ? 0 : 1)};
  cursor: move;
`;

function Board({ name, index, moveCard, id }) {
  const ref = useRef(null);
  const [, drop] = useDrop({
    accept: 'BOARD',
    hover(item, monitor) {
      if (!ref.current) {
        return;
      }
      const dragIndex = item.index;
      const hoverIndex = index;
      if (dragIndex === hoverIndex) {
        return;
      }
      const hoverBoundingRect = ref.current.getBoundingClientRect();
      const hoverMiddleY =
        (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
      const clientOffset = monitor.getClientOffset();
      const hoverClientY = clientOffset.y - hoverBoundingRect.top;
      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return;
      }
      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        return;
      }
      moveCard(dragIndex, hoverIndex);
      item.index = hoverIndex;
    }
  });

  const [{ isDragging }, drag] = useDrag({
    item: { type: 'BOARD', id, index },
    collect: monitor => ({
      isDragging: monitor.isDragging()
    })
  });

  drag(drop(ref));

  return (
    <StyledDiv isDragging={isDragging} ref={ref} className="box">
      {name}
    </StyledDiv>
  );
}

export default Board;
