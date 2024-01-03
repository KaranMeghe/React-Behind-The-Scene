import { content } from "./utils/config";
import Tabbed from "./Commponents/Tabbed";
const App = () => {
  return (
    <div>
      <Tabbed content={content} />
    </div>
  );
};

export default App;
