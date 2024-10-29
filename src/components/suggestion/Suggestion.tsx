
import Container from '../layout/Container'
import Link from 'next/link'
import { ICardMovie } from '@/types/type'
import Card from '../re-usable/card';

interface SuggestionProps {
  cardData: ICardMovie[];
}
const Suggestion: React.FC<SuggestionProps> = ({ cardData }) => {
  return (
    <Container className='mt-10'>
      <Link href='/' className='px-6 py-3 font-medium bg-cta hover:bg-ctaHover text-white rounded-sm shadow-md'>Suggestion</Link>
      <div className='grid grid-cols-6 mt-10'>

        {
          cardData.map((item) => (
            <Card card={item} key={item.id} />
          ))
        }

      </div>
    </Container>
  )
}

export default Suggestion