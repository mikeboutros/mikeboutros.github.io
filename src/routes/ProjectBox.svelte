<style lang="scss">
    @import "static/global.scss";

    section {
        display: grid;
        row-gap: 20px;
        align-items: center;
    }

    pre, .result-style {
        word-break: break-word;
        border-radius: 15px;
        background: #ffffff;
    }
    
    pre {
        border: 1px solid #f2f2f2;
        padding: 35px;
        background: #ffffff;
        // box-shadow: 5px 10px;
        // grid-column: 2/3;
        grid-column: 2/3;
    }

    h3 {
        font-weight: bold;
        // grid-column: 2/3;
    }

    h3, h5, .result {
        padding: 15px 5px;
        text-align: center;
        border-radius: 15px;
        border: 1px solid #7fbfff75;
        background: #ffffff;
        // box-shadow: 5px 10px;
        grid-column: 2/3;
    }

    .result-style {
        color: #25c6c6;
        text-align: center;
        border: 1px solid #f2f2f2;
        padding: 15px 45px;
        // box-shadow: 5px 10px;
        grid-column: 2/3;
    }

    // @media all and (max-width: 480px) {
    //     section {
    //         display: grid;
    //         grid-template-columns: 1fr;
    //         grid-gap: 10px;
    //         align-items: center;
    //         }
    //     }

    // @media all and (max-width: 768px) {
    //     section {
    //         display: grid;
    //         grid-template-columns: 1fr;
    //         grid-gap: 10px;
    //         align-items: center;
    //         }
    //     }

    @media all and (min-width: 992px) {
        section {
            display: grid;
            grid-template-columns: 200px 1fr;
            grid-gap: 10px;
            align-items: center;
        }

        h3, h5 {
            grid-column: 1 / 2;
        }
    }

        // @media all and (max-width: 600px) {
        //     section {
        //         grid-template-columns: 100px 1fr 100px;
        //     }
        // }

</style>

    <section>
        <h3>
            <slot name="title_type1"></slot>
        </h3>
        <pre>
            <slot name="code_type1"></slot>
        </pre>
        <div class="result">
            <slot name="result_type1"></slot>
        </div>
        <div class="result-style">
            <slot name="result-style_type1"></slot>
        </div>

        <h3>
            <slot name="title_type2"></slot>
        </h3>
        <pre>
            <slot name="code_type2"></slot>
        </pre>
        <div class="result">
            <slot name="result_type2"></slot>
        </div>
        <div class="result-style">
            <slot name="result-style_type2"></slot>
        </div>

        <h3>
            <slot name="title_type3"></slot>
        </h3>
        <pre>
            <slot name="code_type3"></slot>
        </pre>

        <h5>
            <slot name="title_type4"></slot>
        </h5>
        <pre>
            <slot name="code_type4"></slot>
        </pre>

        <h5>
            <slot name="title_type5"></slot>
        </h5>
        <pre>
            <slot name="code_type5"></slot>
        </pre>
    </section>