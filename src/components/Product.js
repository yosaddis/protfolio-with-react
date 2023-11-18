import React from 'react';
import ProductCard from './ProductCard';
import '../assets/css/Product.css';
import '../assets/css/ProductCard.css';

const Product = () => {
  const products = [
    {
      id: 1,
      image: 'https://play-lh.googleusercontent.com/APeEfCa_hcN58tXn509xSpwA-Eu9TZkFnIZ3CexA69ENRqKKu21FQ_SzaDmM-G2tTIo=w240-h480-rw',
      projectTitle: 'Geez Numbers',
      description: 'A numbers learning app for a geez language.',
      link: 'https://play.google.com/store/apps/details?id=com.sefed.geeznumbers',
    },
    {
      id: 2,
      image: 'https://play-lh.googleusercontent.com/f5bD07KDWfkh66EN24ypXSPmuFjEqmy0yCkecM_cy_xMuB8311DMjEpmZn3rHGSFke-v=w240-h480-rw',
      projectTitle: 'Yetuga',
      description: 'A bussiness directory app in Amharic language.',
      link: 'https://play.google.com/store/apps/details?id=com.sefed.yetuga',
    },
    {
      id: 3,
      image: 'https://sefedsystems.com/wp-content/uploads/2020/01/home_hosting_pricing_pic_4.png',
      projectTitle: 'Easy Race',
      description: 'Elite athlets race result management system.',
      link: 'https://sefedsystems.com/application-and-features/',
    },
    {
      id: 4,
      image: 'https://sefedsystems.com/wp-content/uploads/2023/04/Login-1536x824.png',
      projectTitle: 'Sefed HMIS',
      description: 'Hospital Management Information System',
      link: 'https://sefedsystems.com/sefed-electronic-medical-record/',
    },
  ];

  return (
    <section className="products" id="product">
      <h2 className="section-title">My Products</h2>
      <h2 className="about__subtitle">
        I&apos;m passionate about bringing ideas to life through coding, whether
        it&apos;s building products, implementing new features, or creating
        engaging websites. If you&apos;re seeking a skilled developer with
        a proven track record, I invite you to explore my work and experience.
        If you like what you see and have a project in mind, don&apos;t hesitate to reach out.
        I&apos;m here to help turn your vision into a reality!
      </h2>
      <div className="product__container">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            image={product.image}
            projectTitle={product.projectTitle}
            description={product.description}
            link={product.link}
          />
        ))}
      </div>
    </section>
  );
};

export default Product;
