import './App.css';
import ParamEditor from './components/ParamEditor';

function App() {
  return (
    <>
      <ParamEditor
        params={[
          {
            id: 1,
            name: 'Назначение',
            type: 'string',
          },
          {
            id: 2,
            name: 'Длина',
            type: 'string',
          },
        ]}
        model={{
          paramValues: [
            {
              paramId: 1,
              value: 'повседневное',
            },
            {
              paramId: 2,
              value: 'макси',
            },
          ],
        }}
      />
    </>
  );
}

export default App;
