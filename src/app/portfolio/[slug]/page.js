import DynamicContentPage, { getStaticParams, getContentData } from '../../../components/DynamicContentPage';

export async function generateStaticParams() {
  return getStaticParams('portfolio');
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const data = getContentData('portfolio', slug);
  
  if (!data) return {};

  return {
    title: data.title,
    description: data.description,
  };
}

export default async function PortfolioPage({ params }) {
  const { slug } = await params;
  return <DynamicContentPage category="portfolio" slug={slug} />;
}
