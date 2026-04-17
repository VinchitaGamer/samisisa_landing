import Layout from './Layout';
import HeroBanner from './HeroBanner';
import { LanguageProvider } from './LanguageContext';

export default function Home() {
  return (
    <LanguageProvider>
      <Layout>
        <HeroBanner />
      </Layout>
    </LanguageProvider>
  );
}
