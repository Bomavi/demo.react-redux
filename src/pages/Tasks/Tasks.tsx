import Box from '@mui/material/Box';

import PageContent from 'src/components/PageContent';

import TasksCreator from './components/TaskCreator';
import Task from './components/Task';

const TASKS_MOCKS = [
  {
    id: '1',
    text: 'Task num. 01',
    completed: true,
  },
  {
    id: '2',
    text: 'Task num. 02',
    completed: false,
  },
  {
    id: '3',
    text: 'Task num. 03',
    completed: true,
  },
  {
    id: '4',
    text: 'Task num. 04',
    completed: true,
  },
  {
    id: '5',
    text: 'Task num. 05',
    completed: false,
  },
];

function Tasks() {
  return (
    <PageContent title="Tasks">
      <TasksCreator />
      <Box sx={{ mt: 3 }}>
        {TASKS_MOCKS.map((task) => (
          <Task
            key={task.id}
            id={task.id}
            completed={task.completed}
            text={task.text}
          />
        ))}
      </Box>
    </PageContent>
  );
}

export default Tasks;
