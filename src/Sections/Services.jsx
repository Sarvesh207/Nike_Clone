import {services} from '../constants/index'
import ServiceCard from '../components/ServiceCard'
const Services = () => {
  
  return (
    <section className="max-container flex justify-center flex-wrap gap-9">
      {
        services.map((service) => (
          <ServiceCard  key={service.label} label={service.label} imgURL={service.imgURL} subtext={service.subtext}/>
        ))
      }
    </section>
  )
}

export default Services