import React from 'react';
import image from '../images/img3.jpg';

const PostDetails = () => {
    return (
        <div className="container m-auto p-4">
            <div>
                <img src={image} alt="" className="rounded-sm" />
                <h1 className="text-4xl pt-8 tracking-wide font-primary">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque, nihil?</h1>
                <p className="text-justify py-10">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi obcaecati expedita earum, molestiae minus non nesciunt enim, magni perspiciatis distinctio sit recusandae rem tempora suscipit adipisci molestias, ullam ad odit corporis accusamus quos repellat. Dolorum modi consequatur ea atque repudiandae! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo, est molestiae iste atque nam natus ea veniam labore iusto quam enim aspernatur dolorem earum eos adipisci doloribus cupiditate quasi incidunt? Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae dolorum ullam soluta eaque expedita. Adipisci soluta ipsum quaerat, in, vel dolorum enim hic repellat cupiditate sapiente consequatur, magni facere. Commodi? Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae cumque hic cupiditate quo nam, dolores autem ipsam dolor quam, culpa natus ipsum, odit quisquam deleniti suscipit molestiae nisi sit tenetur.

                </p>
            </div>

        </div>
    );
};

export default PostDetails;