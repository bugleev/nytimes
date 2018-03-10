import React, { Component } from 'react';
import Navbar from './Navbar';
import Form from './Form';
import styles from './styles';



class Body extends Component {
  render() {
    return (
      <div className="uk-section uk-preserve-color uk-flex-center main" data-uk-grid>
        <Navbar />
        <Form />
        <div className="uk-child-width-1-1 uk-child-width-1-3@s uk-width-2-3@m uk-flex-center uk-grid-match" data-uk-grid>
          <div className="uk-animation-toggle">
            <div className="uk-card uk-card-default uk-card-body uk-animation-slide-top">
              <p className="uk-text-center">Fade</p>
            </div>
          </div>
          <div className="uk-animation-toggle">
            <div className="uk-card uk-card-primary uk-card-body uk-animation-slide-bottom">
              <p className="uk-text-center">Fade</p>
            </div>
          </div>
          <div className="uk-animation-toggle">
            <div className="uk-card uk-card-secondary uk-card-body uk-animation-slide-left">
              <p className="uk-text-center">Fade</p>
            </div>
          </div>
          <p className="uk-width-1-1 uk-text-justify">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit nulla eum voluptatem pariatur. Quo consectetur voluptas quisquam laudantium, quis explicabo dolorem natus aspernatur autem sequi est quam vitae facilis modi laborum, omnis exercitationem quas nisi. Odio eaque commodi eligendi labore deleniti eius ipsam facilis corporis, accusantium facere, itaque reiciendis sed placeat natus tempore veritatis aperiam laudantium animi corrupti nemo! Aperiam sint natus architecto eius impedit consequatur earum atque, quibusdam illum. Eligendi illum perspiciatis, nisi recusandae exercitationem eos cupiditate, neque cumque ut at aliquid cum, incidunt explicabo iure voluptatibus dolorem? Quod vitae fugit fuga veniam aut veritatis eius aspernatur officiis totam aliquid nisi vel aperiam id expedita, nobis perspiciatis ut voluptatem harum dolorem, est reprehenderit. Velit nostrum culpa soluta voluptas doloremque. Explicabo labore minima facere ipsa qui recusandae aperiam, sunt dignissimos blanditiis nihil omnis quaerat perferendis maiores velit atque illum pariatur. Eius provident cupiditate voluptates eveniet nulla, reiciendis ad? Ipsa ipsam quos minima, impedit quo soluta, nesciunt debitis reiciendis unde, necessitatibus suscipit molestiae repudiandae quae harum nobis aut! Debitis minus et magnam, consequuntur iure facilis ullam porro blanditiis non placeat quis eaque autem nam fugiat impedit repellendus illum doloremque perspiciatis modi! Accusantium natus voluptas placeat ipsum eaque, neque repudiandae nemo autem quos quia quisquam repellat est assumenda non dignissimos expedita accusamus culpa, velit temporibus deleniti! Magnam eaque, eius, ut vel ullam eos aperiam temporibus, sint aut possimus provident dolores accusantium velit iusto libero architecto. Excepturi nihil reiciendis voluptatibus dignissimos dolores cupiditate, ipsam alias. Dolorem, veritatis. Suscipit quaerat temporibus quo, sapiente earum repellat blanditiis quis consectetur? Corporis nihil enim incidunt debitis voluptates quas ea nesciunt dolores ad neque consequatur, doloribus quidem dolore quam tempora, dignissimos reiciendis vel repellendus necessitatibus beatae ullam facilis! Nostrum sint facilis ut commodi omnis explicabo illo molestiae asperiores odio perferendis quibusdam, placeat cupiditate recusandae veniam dolorem facere, ipsam natus officiis ullam exercitationem eos enim aperiam optio? Explicabo rem id hic dolore quaerat voluptates, et corporis optio exercitationem maiores eaque alias esse assumenda deleniti vitae eius quo, repellendus obcaecati. Corporis beatae laudantium in dolores mollitia, sint quaerat delectus velit aliquid eveniet facilis ratione nemo aspernatur, culpa dolorum sit dignissimos animi nobis placeat maiores nisi odit? Dolorum accusantium quas earum sint, sequi, quisquam molestiae fugiat iste perspiciatis nemo commodi rem natus officia adipisci. Veniam, possimus cupiditate quisquam animi vitae voluptatibus illum. Sed qui esse vitae pariatur, dignissimos dolore ducimus eos quibusdam quidem vel nostrum, assumenda rerum minus nesciunt sint deleniti laudantium tenetur ut cum rem atque excepturi. Voluptates voluptas aliquid, quae, pariatur ullam quo vel magni dolorum inventore expedita perspiciatis culpa. Dolorum, corporis odio libero beatae dicta accusantium provident placeat magni voluptas, enim corrupti, earum suscipit iure mollitia excepturi consequuntur deleniti architecto vitae! Maiores rem deserunt accusantium odio impedit architecto! Tempore amet ea natus porro eveniet quaerat deserunt, unde, assumenda veritatis voluptates dolores laboriosam quia suscipit delectus! Vero ut distinctio voluptatum dignissimos iusto labore accusantium dolore quidem laboriosam, sit doloribus ab fuga quaerat vel ad reiciendis enim excepturi repellendus voluptatem expedita, natus, eaque reprehenderit? Accusantium repellendus perspiciatis vitae modi nemo?</p>
        </div>
        <style jsx>{styles}</style>
      </div>

    )
  }
}

export default Body;