import Head from 'next/head';

import React, { HtmlHTMLAttributes } from 'react';

import Navbar from '../components/Navbar';

import { UserData } from '../common/interfaces';

export interface LayoutProps extends HtmlHTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  userData?: UserData;
  SEO?: {
    title?: string;
    description?: string;
    ogTitle?: string;
    ogURL?: string;
  };
}

const defaultTitle = 'Redeem App';
const defaultDescription = 'Aerolab Challenge by Tomas Mercado.';
const defaultOgURL = 'https://redeem-app.vercel.app/';

export default function Layout({
  children,
  userData,
  className,
  SEO,
  ...props
}: LayoutProps) {
  return (
    <div className={`pb-16 ${className || ''}`} {...props}>
      <Head>
        <title>{SEO?.title || defaultTitle}</title>
        <meta
          name="description"
          content={SEO?.description || defaultDescription}
        />

        <meta key="og:type" property="og:type" content="website" />
        <meta
          key="og:title"
          property="og:title"
          content={SEO?.ogTitle || defaultTitle}
        />
        <meta
          key="og:description"
          property="og:description"
          content={SEO?.description || defaultDescription}
        />
        <meta
          key="og:image"
          property="og:image"
          content={'../images/aerolab-logo.svg'}
        />
        <meta
          key="og:url"
          property="og:url"
          content={SEO?.ogURL || defaultOgURL}
        />

        <meta
          name="google-site-verification"
          content="1W8ZtPpZTGQAj2EcdiVbrbDy_7Er1Q4cTNwjoem6R74"
        />
      </Head>

      <Navbar userName={userData?.name} userPoints={userData?.points} />
      {children}
    </div>
  );
}
