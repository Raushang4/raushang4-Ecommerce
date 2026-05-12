import DynamicContentPage, { getStaticParams, getContentData } from '../../../components/DynamicContentPage';

export async function generateStaticParams() {
  return getStaticParams('legal');
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const data = getContentData('legal', slug);
  
  if (!data) return {};

  return {
    title: data.title,
    description: data.description,
  };
}

export default async function LegalPage({ params }) {
  const { slug } = await params;
  return <DynamicContentPage category="legal" slug={slug} />;
}
