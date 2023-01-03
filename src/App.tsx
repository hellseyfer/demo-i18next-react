import './i18n/config';
import { useTranslation } from 'react-i18next';
import Comp1 from './components/Comp1';

function App() {
  const {t} = useTranslation("nsUserLogin");

  return (
    <div className="App">
      <p>{t('title')}</p>
      <p>{t('description.part1')}</p>
      <p>{t('description.part2')}</p>
      <br />
      <Comp1></Comp1>
    </div>

  );
}

export default App;