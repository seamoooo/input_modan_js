import Layout from '../components/Layout';
// 画像の圧縮等も行ってくれる
import Image from 'next/image';

const Contact = () => {
  return (
    <Layout title="contact">
      <div className="bg-white text-center shadow-xl p-8 w-80 rounded">
        <div className="mt-4">
          <p className="font-bold">contact info</p>
        </div>
        <div className="flex justify-center mt-4">
          <Image
            className="rounded-full"
            src="/iam.jpg"
            width={60}
            height={60}
            alt="avater"
          />
        </div>
        <div className="mt-4">
          <p className="font-bold">Adress</p>
          <p className="text-xs mt-2 text-gray-600">City A</p>
          <p className="font-bold mt-3">Email</p>
          <p className="text-xs mt-2 text-gray-600">hogehoge@gmail.com</p>
          <p className="text-xs mt-2 text-gray-600">0120-08080-07989</p>
        </div>

        {/* アイコン必要なときに */}
        {/* <div className="mt-4">
          <a href="http://" target="_blank" rel="noopener noreferrer"></a>
        </div> */}
      </div>
    </Layout>
  );
};

export default Contact;
