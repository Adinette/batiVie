import React from 'react'

export default function Banner({title,description}) {
    return (
        <div class="banner-bg">
            <div class="container">
                <div class="row">
                    <div class="col-md-8 col-lg-6 mx-auto">
                        <div class="text-center">
                            <h2>{title}</h2>
                            <span class="banner-content">{description}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
