import React from 'react'
import { PRODUCTS } from './ProductDetail'
import './CareTips.css'

const TIPS_MAP = {
  'Golden Retriever': 'Requires daily vigorous exercise (fetch/walks) and weekly brushing to maintain a healthy coat.',
  'Persian Cat': 'Daily grooming is crucial to prevent matting; eyes need regular gentle cleaning.',
  'Budgie': 'Thrives on social interaction; provide a spacious cage and rotate toys frequently to prevent boredom.',
  'Rabbit': 'Needs unlimited timothy hay, fresh leafy greens, and plenty of space to hop; chew toys are a must.',
  'Hamster': 'Strictly nocturnal and solitary; provide deep bedding for burrowing and a solid surface wheel.',
  'Turtle': 'Requires a proper basking area with UVB lighting and high-quality water filtration to stay healthy.',
  'Labrador': 'Prone to obesity, so manage diet carefully; loves swimming and mental stimulation games.',
  'Siamese Cat': 'Highly social and vocal; requires interactive play and dislikes being left alone for long periods.',
  'Cockatiel': 'Social birds that need time out of cage daily; offer a varied diet of pellets, seeds, and veggies.',
  'Guinea Pig': 'Must have Vitamin C supplements daily and should be kept in pairs as they are very social.',
  'Ferret': 'Curious escape artists; require a ferret-proofed play area and a high-protein carnivorous diet.',
  'Goldfish': 'Produces high waste; needs a large tank (not a bowl) with strong filtration and frequent water changes.'
}

const CareTips = () => {
  return (
    <div className="care-tips-container">
      <header className="care-tips-header">
        <h1>Pet Care Guide</h1>
        <p>Expert advice to keep your companions happy and healthy.</p>
      </header>

      <div className="tips-grid">
        {PRODUCTS.map(product => {
          // Fallback tip if name doesn't match exactly
          const tip = TIPS_MAP[product.name] || `Provide fresh water daily and research specific care needs for ${product.name}.`
          
          return (
            <div key={product.id} className="tip-card">
              <div className="tip-image">
                <img src={product.image} alt={product.name} />
              </div>
              <div className="tip-content">
                <h3>{product.name}</h3>
                <div className="tip-text">
                  <span className="tip-icon">💡</span>
                  <p>{tip}</p>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default CareTips