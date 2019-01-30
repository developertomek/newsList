<template>
    <div class="newslist">
        <div class="container">
            <ul class="media-list">
                <li class="media" v-for="article in articles" :key="article">
                    <div class="col-sm-4 col-lg-3 media-img">
                        <div class="media-center">
                            <a v-bind:href="article.url" target="_blank">
                                <img class="media-object img-responsive" v-bind:src="article.urlToImage">
                            </a>
                        </div>
                        </div>
                        <div class="col-sm-8 col-lg-9">
                        <div class="media-body">
                            <h4 class="media-heading">
                                <a v-bind:href="article.url" target="_blank">{{article.title}}</a>
                            </h4>
                            <h5><i>by {{article.author}}</i></h5>
                            <p class="text-justify">{{article.description}}</p>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: 'newslist',
    props: ['source'],
    data () {
        return {
            articles: []
        }
    },
    methods: {
        updateSource: function (source) {
            this.$http.get('https://newsapi.org/v1/articles?source=' + source + '&apiKey=9d0bd4eff53547ce8cb0b46293bcc14e')
            .then(response => {
                this.articles = response.data.articles;
            })
        }
    },
    created: function () {
        rhis.updateSource(this.source);
    },
    watch: {
        source: function (val) {
            this.updateSource(val);
        }
    }
}
</script>

<style scoped>
    img{
        margin: auto;
    }
    .media-object{
        height: 140px;
        padding: 5px;
    }
    .media {
        border-top: 1px solid lightgrey;
        padding-top: 20px;
    }
</style>