import { RouterProvider } from 'react-router-dom';
import { router } from './Routes/Routes/Routes';
// import '@coreui/coreui/dist/css/coreui.min.css';

function App() {
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
