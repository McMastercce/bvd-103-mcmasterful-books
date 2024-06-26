import adapter from 'adapter';
import assignment from './assignment-1';
import assignment_2 from './assignment-2';
import assignment_3 from './assignment-3';
import assignment_4 from './assignment-4';

function App() {
  if (adapter.assignment == "assignment-1") {
    return assignment(adapter);
  } else if (adapter.assignment == "assignment-2") {
    return assignment_2(adapter);
  } else if (adapter.assignment == "assignment-3") {
    return assignment_3(adapter);
  } else if (adapter.assignment == "assignment-4") {
    return assignment_4(adapter);
  }
}

export default App

