import React from 'react'



const Definition = ({ word, definition }) => {
    return (
        <div key={word} className="columns is-gapless" style={{
            borderBottom: 'solid 1px grey'
        }
        }>
            <div className="column has-text-dark">{word}</div>
            <div className="column is-three-quarters">{definition}</div>
        </div>
    )
}

export const GlossaryPageTemplate = ({ title, definitions }) => {
    const sortedDefinitions = definitions.sort();
    return (
        <section className="section section--gradient">
            <div className="container">
                <div className="columns">
                    <div className="column is-10 is-offset-1">
                        <div className="section">
                            <h2 className="title is-size-3 has-text-weight-bold is-bold-light">
                                {title}
                            </h2>
                            {sortedDefinitions.map(Definition)}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}


