import DynamicContentPage, { getStaticParams, getContentData } from '../../../components/DynamicContentPage';

export async function generateStaticParams() {
  return getStaticParams('resources');
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const data = getContentData('resources', slug);
  
  if (!data) return {};

  return {
    title: data.title + " | raushang4 Resources",
    description: data.description,
  };
}

export default async function ResourcePage({ params }) {
  const { slug } = await params;
  return <DynamicContentPage category="resources" slug={slug} />;
}
