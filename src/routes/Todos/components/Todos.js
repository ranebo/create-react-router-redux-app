import React from 'react';
import HiddenScrollBarList from 'lib/components/HiddenScrollBarList';

const Todos = ({ todos }) => (
  <section className="fit-center text-center expand">
    <HiddenScrollBarList
      components={ todos }
      height='500px'
      width='100%'
      outerClasses="fit-center"
    />
  </section>
);

export default Todos;
