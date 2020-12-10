import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
.slick-track {
  height: 500px;
  background-color: #f7fafc;
}
.slick-slide img{
  height: 500px;
  object-fit: contain;
}
.slick-next:before, .slick-prev:before {
  display: none;
}
`
