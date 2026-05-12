import DynamicContentPage, { getStaticParams, getContentData } from '../../../components/DynamicContentPage';

export async function generateStaticParams() {
  return getStaticParams('careers');
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const data = getContentData('careers', slug);
  
  if (!data) return {};

  return {
    title: data.title,
    description: data.description,
  };
}

export default async function CareersPage({ params }) {
  const { slug } = await params;
  return <DynamicContentPage category="careers" slug={slug} />;
}
