
import Head from '../components/Head';
import Markdown from '../components/Markdown';
import HeroSection from '../hoc/HeroSection';
import GitHubMarkdownWrapper from '../hoc/GitHubMarkdownWrapper';
import { pages } from '../utils/links';
import { reactHooksDoc } from '../data';

const ReactHooks = () => (
  <>
    <Head title={pages.reactHooks.title} />
    <HeroSection>
      <GitHubMarkdownWrapper>
        <Markdown source={reactHooksDoc} />
      </GitHubMarkdownWrapper>
    </HeroSection>
  </>
);

export default ReactHooks;
