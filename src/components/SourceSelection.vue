<template>
    <div class="sourceselection">
        <div class="jumbotron">
            <h1><span class="glyphicon glyphicon-list-alt"></span> News List</h1>
            <br><h5>Select News source</h5>
            <select class="form-control" v-on:change="sourceChanged">
                <option v-bind:value="source.id" v-for="source in sources" :key="source.name">{{source.name}}</option>
            </select>
            
            <div v-if="source">
                <br><h6 class="text-justify">{{source.description}}</h6><br>
                <a v-bind:href="source.url" class="btn btn-primary" target="_blank">Go To {{source.name}} Website</a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'sourceselection',
    data () {
        return{
            sources: [],
            source: ''
        }
    },
    methods: {
        sourceChanged: function(e) {
            for (var i=0; i<this.sources.length; i++) {
                if (this.sources[i].id == e.target.value) {
                  this.source = this.sources[i];
                }
            }
            this.$emit('sourceChanged', e.target.value);
         }
    },
    created: function () {
        this.$http.get('https://newsapi.org/v1/sources?language=en')
        .then(response => {
            this.sources = response.data.sources;
        });
     }
}
</script>

<style scoped>
    .btn-primary{
        margin-left: 50%;
        transform: translateX(-50%);
    }

</style>