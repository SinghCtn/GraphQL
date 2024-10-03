import "./App.css";
import { useQuery, gql } from "@apollo/client";

const query = gql`
  query GetTodosWithUser {
    getTodos {
      id
      title
      completed
      user {
        id
        name
      }
    }
  }
`;

function App() {
  const { data, loading } = useQuery(query);
  if (loading) return <h1> Loading.... </h1>;
  return (
    <div>
      <table>
        {data.getTodos.map((todo) => (
          <tr key={todo.title}>
            <td>{todo.title}</td> <td>{todo.user.name}</td>
          </tr>
        ))}
      </table>
    </div>
  );
}

export default App;
