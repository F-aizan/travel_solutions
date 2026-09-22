import { notFound } from "next/navigation";
import { packages } from "@/data/packages";
import PackageDetails from "@/components/packages/PackageDetails";

interface PackagePageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return packages.map((pkg) => ({
    slug: pkg.slug,
  }));
}

export async function generateMetadata({ params }: PackagePageProps) {
  const { slug } = await params;

  const pkg = packages.find((item) => item.slug === slug);

  if (!pkg) {
    return {
      title: "Package Not Found | Royal Journey Tours Kashmir",
    };
  }

  return {
    title: `${pkg.title} | Royal Journey Tours Kashmir`,
    description: pkg.description,
    alternates: {
      canonical: `https://www.royaljourneytourskashmir.com/packages/${pkg.slug}`,
    },
    openGraph: {
      title: `${pkg.title} Kashmir | Royal Journey Tours`,
      description: pkg.description,
      url: `https://www.royaljourneytourskashmir.com/packages/${pkg.slug}`,
      images: [
        {
          url: pkg.image,
          width: 1600,
          height: 900,
          alt: `${pkg.title}, Kashmir`,
        },
      ],
      type: "website",
    },
  };
}

export default async function PackagePage({ params }: PackagePageProps) {
  const { slug } = await params;

  const pkg = packages.find((item) => item.slug === slug);

  if (!pkg) {
    notFound();
  }

  return <PackageDetails pkg={pkg} />;
}
