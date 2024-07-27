import Head from 'next/head';
import Link from 'next/link';
import Layout from '../../components/layout';
// import '../styles/aa.css';
import styles from '../../components/layout.module.css';
import Image from 'next/image';

export default function FirstPost() {
  return (
    <div className={styles.container}>
      <Head>
        <title>First Post</title>
      </Head>
      <h1>First Post</h1>
      <h2 className={styles.container}>
        <Link href="/">← Back to home</Link>
      </h2>
      <Image
      fill
              priority
              src="/favicon.ico"
              // height={144}
              // width={144}
              alt=""
              sizes='width=100'
            />
    </div>
  );
}