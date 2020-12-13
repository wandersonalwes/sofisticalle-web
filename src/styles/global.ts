import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
.slick-track {
  height: min(500px, 90vw);
  background-color: #f7fafc;
}
.slick-slide img{
  height: min(500px, 90vw);
  object-fit: contain;
}
.slick-next:before, .slick-prev:before {
  display: none;
}
`
