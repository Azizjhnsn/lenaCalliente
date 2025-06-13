import { Button } from "react-bootstrap";

export default function HeroSection({bgImg}) {
  return (
    <div
      className="d-flex align-items-center justify-content-center text-white"
      style={{
        backgroundImage: `url(${bgImg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '80vh', // Full viewport height
      }}
    >
      <div className="text-center  p-6 rounded-3">
        <p className="small">OUR OFFERS</p>
        <h1 className="display-4 fw-bold">The best pellets</h1>
        <Button className="mt-4 bg-primary px-5 py-2">BUY NOW</Button>
      </div>
    </div>
  );
}
