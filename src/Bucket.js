import React from 'react';
import { useDrop } from 'react-dnd'

export default function Bucket() {
  const [{ canDrop, isOver }, drop] = useDrop(() => ({
    // The type (or types) to accept - strings or symbols
    accept: 'BOX',
    // Props to collect
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop()
    })
  }))

  return (
    <div
      ref={drop}
      role={'Dustbin'}
      style={{ backgroundColor: isActive ? 'red' : 'white' }}
    >
      {isActive ? 'Release to drop' : 'Drag a box here'}
    </div>
  )
}
