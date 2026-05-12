import DynamicContentPage, { getStaticParams, getContentData } from '../../../components/DynamicContentPage';

export async function generateStaticParams() {
  return getStaticParams('case-study');
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const data = getContentData('case-study', slug);
  
  if (!data) return {};

  return {
    title: data.title,
    description: data.description,
  };
}

export default async function CaseStudyPage({ params }) {
  const { slug } = await params;
  return <DynamicContentPage category="case-study" slug={slug} />;
}
