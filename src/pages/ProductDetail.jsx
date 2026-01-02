import { useParams, useNavigate } from 'react-router-dom'
import './ProductDetail.css'

export const PRODUCTS = [
  { id: 1, name: 'Golden Retriever', price: 35000, image: 'images/golden-retriever.jpg', description: 'Friendly and energetic golden retriever', breed: 'Golden Retriever', age: '2-3 years', temperament: 'Friendly, Intelligent, Devoted', size: 'Large', lifespan: '10-12 years', details: 'Golden Retrievers are one of the most popular dog breeds. They are excellent family dogs and are known for their friendly and tolerant attitude. They are great with children and other pets.' },
  { id: 2, name: 'Persian Cat', price: 25000, image: 'https://images.unsplash.com/photo-1574158622682-e40e69881006?w=400&q=80', description: 'Beautiful and calm Persian cat', breed: 'Persian', age: '1-2 years', temperament: 'Calm, Sweet, Gentle', size: 'Medium', lifespan: '12-17 years', details: 'Persian cats are known for their flat faces and long luxurious coats. They are gentle, quiet, and affectionate cats that love to lounge around the house. They require regular grooming to maintain their beautiful coats.' },
  { id: 3, name: 'Budgie', price: 5000, image: 'images/budgie.jpg', description: 'Colorful and talkative budgie', breed: 'Parakeet', age: '1 year', temperament: 'Playful, Social, Vocal', size: 'Small', lifespan: '5-10 years', details: 'Budgies are small, colorful parrots that are fun and interactive pets. They can learn to mimic sounds and words, and enjoy playing with toys and interacting with their owners. They thrive in pairs or groups.' },
  { id: 4, name: 'Rabbit', price: 6000, image: 'images/rabbit.jpg', description: 'Cute and fluffy rabbit', breed: 'Mixed Breed', age: '1-2 years', temperament: 'Gentle, Social, Active', size: 'Medium', lifespan: '8-12 years', details: 'Rabbits are quiet, gentle pets that are perfect for families. They are social animals and do well in pairs. They require plenty of space to hop around and a diet rich in hay and vegetables.' },
  { id: 5, name: 'Hamster', price: 2000, image: 'images/hamster.jpg', description: 'Small and adorable hamster', breed: 'Syrian Hamster', age: '8 weeks', temperament: 'Curious, Playful, Nocturnal', size: 'Small', lifespan: '2-3 years', details: 'Hamsters are small, adorable pets that are perfect for beginners. They are active and curious, and love to explore their cages. They are low-maintenance pets that require a proper cage, bedding, food, and water.' },
  { id: 6, name: 'Turtle', price: 10000, image: 'images/turtle.jpg', description: 'Long-living turtle pet', breed: 'Red-Eared Slider', age: '2-3 years', temperament: 'Calm, Long-lived, Peaceful', size: 'Medium', lifespan: '20-40 years', details: 'Turtles are fascinating pets that can live for decades. They require a proper aquatic habitat with basking areas, good filtration, and a balanced diet. They are low-maintenance once their habitat is set up properly.' },
  { id: 7, name: 'Labrador', price: 32000, image: '/images/labrador.jpg', description: 'Loyal and friendly labrador', breed: 'Labrador', age: '2-3 years', temperament: 'Friendly, Intelligent, Devoted', size: 'Large', lifespan: '10-12 years', details: 'Labradors are one of the most popular dog breeds. They are excellent family dogs and are known for their friendly and tolerant attitude. They are great with children and other pets.' },
  { id: 8, name: 'Siamese Cat', price: 22000, image: '/images/siamese-cat.jpg', description: 'Elegant and vocal Siamese cat', breed: 'Siamese', age: '1-2 years', temperament: 'Calm, Sweet, Gentle', size: 'Medium', lifespan: '12-17 years', details: 'Siamese cats are known for their striking blue eyes and sleek bodies. They are intelligent, affectionate cats that are very vocal and love to interact with their owners. They require attention and playtime.' },
  { id: 9, name: 'Cockatiel', price: 4500, image: '/images/cockatiel.jpg', description: 'Playful cockatiel with crest', breed: 'Cockatiel', age: '1-2 years', temperament: 'Playful, Social, Vocal', size: 'Small', lifespan: '10-15 years', details: 'Cockatiels are small, colorful parrots that are fun and interactive pets. They can learn to mimic sounds and words, and enjoy playing with toys and interacting with their owners. They thrive in pairs or groups.' },
  { id: 10, name: 'Guinea Pig', price: 2500, image: '/images/guinea-pig.jpg', description: 'Gentle and social guinea pig', breed: 'Guinea Pig', age: '1-2 years', temperament: 'Gentle, Social, Active', size: 'Medium', lifespan: '5-7 years', details: 'Guinea pigs are quiet, gentle pets that are perfect for families. They are social animals and do well in pairs. They require plenty of space to move around and a diet rich in hay and vegetables.' },
  { id: 11, name: 'Ferret', price: 8000, image: '/images/ferret.jpg', description: 'Curious and mischievous ferret', breed: 'Ferret', age: '1-2 years', temperament: 'Curious, Playful, Mischievous', size: 'Small', lifespan: '5-7 years', details: 'Ferrets are small, curious animals that are full of personality. They love to play and explore, and can be trained to use litter boxes and learn tricks. They require proper housing and socialization.' },
  { id: 12, name: 'Goldfish', price: 700, image: '/images/goldfish.jpg', description: 'Easy-care goldfish', breed: 'Goldfish', age: '1 year', temperament: 'Calm, Long-lived, Peaceful', size: 'Small', lifespan: '10-20 years', details: 'Goldfish are fascinating pets that can live for many years. They require a proper aquarium with good filtration and a balanced diet. They are low-maintenance once their habitat is set up properly.' },
]

export default function ProductDetail({ addToCart }) {
  const { id } = useParams()
  const navigate = useNavigate()
  const product = PRODUCTS.find(p => p.id === parseInt(id))

  if (!product) {
    return (
      <div className="container product-detail-page">
        <h1>Product Not Found</h1>
        <button onClick={() => navigate('/')} className="btn-back">Back to Home</button>
      </div>
    )
  }

  const handleBuy = () => {
    addToCart(product)
    navigate('/checkout')
  }

  return (
    <div className="container product-detail-page">
      <button onClick={() => navigate('/')} className="btn-back">← Back to Products</button>

      <div className="product-detail-container">
        <div className="product-detail-image">
          <img src={product.image} alt={product.name} />
        </div>

        <div className="product-detail-info">
          <h1>{product.name}</h1>
          <p className="product-detail-breed">{product.breed}</p>
          
          <p className="product-detail-price">₹{product.price.toLocaleString('en-IN')}</p>

          <div className="product-specs">
            <div className="spec-item">
              <h4>Age</h4>
              <p>{product.age}</p>
            </div>
            <div className="spec-item">
              <h4>Temperament</h4>
              <p>{product.temperament}</p>
            </div>
            <div className="spec-item">
              <h4>Size</h4>
              <p>{product.size}</p>
            </div>
            <div className="spec-item">
              <h4>Lifespan</h4>
              <p>{product.lifespan}</p>
            </div>
          </div>

          <div className="product-details-section">
            <h3>About This Pet</h3>
            <p>{product.details}</p>
          </div>

          <div className="product-actions">
            <button onClick={handleBuy} className="btn-buy-now">
              Buy Now
            </button>
            <button 
              onClick={() => {
                addToCart(product)
                navigate('/')
              }} 
              className="btn-add-cart-detail"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
