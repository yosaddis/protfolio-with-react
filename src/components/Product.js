import React from 'react';
import ProductCard from './ProductCard';
import '../assets/css/Product.css';
import '../assets/css/ProductCard.css';
import geezNumbers from '../assets/img/products/Geez-Numbers-app.png';
import yetuga from '../assets/img/products/yetuga-app.png';
import easyRace from '../assets/img/products/easy-race-app.png';
import sefedHmis from '../assets/img/products/Sefed-HMIS.png';

const Product = () => {
  const products = [
    {
      id: 1,
      image: geezNumbers,
      projectTitle: 'Geez Numbers',
      description: 'A numbers learning app for a geez language.',
      link: 'https://play.google.com/store/apps/details?id=com.sefed.geeznumbers',
    },
    {
      id: 2,
      image: yetuga,
      projectTitle: 'Yetuga',
      description: 'A bussiness directory app in Amharic language.',
      link: 'https://play.google.com/store/apps/details?id=com.sefed.yetuga',
    },
    {
      id: 3,
      image: easyRace,
      projectTitle: 'Easy Race',
      description: 'Elite athlets race result management system.',
      link: 'https://sefedsystems.com/application-and-features/',
    },
    {
      id: 4,
      image: sefedHmis,
      projectTitle: 'Sefed HMIS',
      description: 'Hospital Management Information System',
      link: 'https://sefedsystems.com/sefed-electronic-medical-record/',
    },
  ];

  return (
    <section className="products" id="product">
      <h2 className="section-title">My Products</h2>
      <div className="section__detail">
        <h2 className="section__detail_text">
          I&apos;m passionate about bringing ideas to life through coding, whether
          it&apos;s building products, implementing new features, or creating
          engaging websites. If you&apos;re seeking a skilled developer with
          a proven track record, I invite you to explore my work and experience.
        </h2>
      </div>
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
