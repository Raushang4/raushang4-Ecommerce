import DynamicContentPage, { getStaticParams, getContentData } from '../../../components/DynamicContentPage';

export async function generateStaticParams() {
  return getStaticParams('blog');
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const data = getContentData('blog', slug);
  
  if (!data) return {};

  return {
    title: data.title,
    description: data.description,
  };
}

export default async function BlogPage({ params }) {
  const { slug } = await params;
  return <DynamicContentPage category="blog" slug={slug} />;
}
