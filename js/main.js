let eventBus = new Vue();

Vue.component('board', {
    template:`
        <div class="tabs">
            <newBoard></newBoard>
            <div class="tabs-wrap">
                <table_1 :column_1="column_1"></table_1>
                <table_2 :column_2="column_2"></table_2>
                <table_3 :column_3="column_3"></table_3>
                <table_4 :column_4="column_4"></table_4>
            </div>   
        </div>
    `,
    data(){
    },
   
})

Vue.component('table_1',{
    template:`
        <div class="tab">
            <h2>Запланированные задачи</h2>
            <ul class="tab-li">
                <li v-for="tab in column_1" v-if="tab.priori == 1">
                    <div class="separator"></div>
                    <a @click="deleteTab(tab)">Удалить</a> &emsp; <a @click="tab.editButton = true">Редактировать</a><br>
                    <p class="tab-title">{{tab.title}}</p>
                    <ul class="tab-task">
                        <li>Описание: {{tab.description}}</li>
                        <li>Дата создания: {{tab.date}}</li>
                        <li>Дедлайн: {{tab.deadline}}</li>
                        <li v-if="tab.edit != null">Последние изменение: {{tab.edit}}</li>
                        <li v-if="tab.editButton === true">
                            <form @submit.prevent="updateTab(tab)">
                                <label for="title">Новый заголовок</label>
                                <input id="title" type="text" v-model="tab.title" maxlength="30" placeholder="Заголовок">
                                <label for="description">Новое описание:</label> 
                                <textarea id="description" v-model="tab.description" cols="20" rows="5"></textarea>
                                <input type="submit" value="Редактировать">
                            </form>                      
                        </li>
                    </ul>
                    <a @click="nextTab(tab)">Следующая колонка</a>
                </li>
                <li v-for="tab in column_1" v-if="tab.priori == 2">
                    <div class="separator"></div>
                    <a @click="deleteTab(tab)">Удалить</a> &emsp; <a @click="tab.editButton = true">Редактировать</a><br>
                    <p class="tab-title">{{tab.title}}</p>
                    <ul class="tab-task">
                        <li>Описание: {{tab.description}}</li>
                        <li>Дата создания: {{tab.date}}</li>
                        <li>Дедлайн: {{tab.deadline}}</li>
                        <li v-if="tab.edit != null">Последние изменение: {{tab.edit}}</li>
                        <li v-if="tab.editButton === true">
                            <form @submit.prevent="updateTab(tab)">
                                <label for="title">Новый заголовок</label>
                                <input id="title" type="text" v-model="tab.title" maxlength="30" placeholder="Заголовок">
                                <label for="description">Новое описание:</label> 
                                <textarea id="description" v-model="tab.description" cols="20" rows="5"></textarea>
                                <input type="submit" value="Редактировать">
                            </form>                      
                        </li>
                    </ul>
                    <a @click="nextTab(tab)">Следующая колонка</a>
                </li>
                <li v-for="tab in column_1" v-if="tab.priori == 3">
                    <div class="separator"></div>
                    <a @click="deleteTab(tab)">Удалить</a> &emsp; <a @click="tab.editButton = true">Редактировать</a><br>
                    <p class="tab-title">{{tab.title}}</p>
                    <ul class="tab-task">
                        <li>Описание: {{tab.description}}</li>
                        <li>Дата создания: {{tab.date}}</li>
                        <li>Дедлайн: {{tab.deadline}}</li>
                        <li v-if="tab.edit != null">Последние изменение: {{tab.edit}}</li>
                        <li v-if="tab.editButton === true">
                            <form @submit.prevent="updateTab(tab)">
                                <label for="title">Новый заголовок</label>
                                <input id="title" type="text" v-model="tab.title" maxlength="30" placeholder="Заголовок">
                                <label for="description">Новое описание:</label> 
                                <textarea id="description" v-model="tab.description" cols="20" rows="5"></textarea>
                                <input type="submit" value="Редактировать">
                            </form>                      
                        </li>
                    </ul>
                    <a @click="nextTab(tab)">Следующая колонка</a>
                </li>
            </ul>
        </div>
    `,
    data(){
        return{

        }
    },
    methods:{
        nextTab(tab){
            this.column_1.splice(this.column_1.indexOf(tab), 1);
            eventBus.$emit('addColumn_2', tab);
        },
        deleteTab(tab){
            this.column_1.splice(this.column_1.indexOf(tab), 1);
        },
        updateTab(tab){
            tab.editButton = false;
            this.column_1.push(tab);
            this.column_1.splice(this.column_1.indexOf(tab), 1);
            tab.edit = new Date().toLocaleString();
        }
    }
})

Vue.component('table_2',{
    template:`
        <div class="tab">
            <h2>Задачи в работе</h2>
            <ul class="tab-li">
                <li v-for="tab in column_2" v-if="tab.priori == 1">
                    <div class="separator"></div>
                    <a @click="tab.editButton = true">Редактировать</a><br>
                    <p class="tab-title">{{tab.title}}</p>
                    <ul class="tab-task">
                        <li>Описание: {{tab.description}}</li>
                        <li>Дата создания: {{tab.date}}</li>
                        <li>Дедлайн: {{tab.deadline}}</li>
                        <li v-if="tab.reason != null" v-for="res in tab.reason">Проблема: {{res}}</li>
                        <li v-if="tab.edit != null">Последние изменение: {{tab.edit}}</li>
                        <li v-if="tab.editButton === true">
                            <form @submit.prevent="updateTab(tab)">
                                <label for="title">Новый заголовок</label>
                                <input id="title" type="text" v-model="tab.title" maxlength="30" placeholder="Заголовок">
                                <label for="description">Новое описание:</label> 
                                <textarea id="description" v-model="tab.description" cols="20" rows="5"></textarea>
                                <input type="submit" value="Редактировать">
                            </form>                      
                        </li>
                    </ul>
                    <a @click="nextTab(tab)">Следующая колонка</a>
                </li>
                <li v-for="tab in column_2" v-if="tab.priori == 2">
                    <div class="separator"></div>
                    <a @click="tab.editButton = true">Редактировать</a><br>
                    <p class="tab-title">{{tab.title}}</p>
                    <ul class="tab-task">
                        <li>Описание: {{tab.description}}</li>
                        <li>Дата создания: {{tab.date}}</li>
                        <li>Дедлайн: {{tab.deadline}}</li>
                        <li v-if="tab.reason != null" v-for="res in tab.reason">Проблема: {{res}}</li>
                        <li v-if="tab.edit != null">Последние изменение: {{tab.edit}}</li>
                        <li v-if="tab.editButton === true">
                            <form @submit.prevent="updateTab(tab)">
                                <label for="title">Новый заголовок</label>
                                <input id="title" type="text" v-model="tab.title" maxlength="30" placeholder="Заголовок">
                                <label for="description">Новое описание:</label> 
                                <textarea id="description" v-model="tab.description" cols="20" rows="5"></textarea>
                                <input type="submit" value="Редактировать">
                            </form>                      
                        </li>
                    </ul>
                    <a @click="nextTab(tab)">Следующая колонка</a>
                </li>
                <li v-for="tab in column_2" v-if="tab.priori == 3">
                    <div class="separator"></div>
                    <a @click="tab.editButton = true">Редактировать</a><br>
                    <p class="tab-title">{{tab.title}}</p>
                    <ul class="tab-task">
                        <li>Описание: {{tab.description}}</li>
                        <li>Дата создания: {{tab.date}}</li>
                        <li>Дедлайн: {{tab.deadline}}</li>
                        <li v-if="tab.reason != null" v-for="res in tab.reason">Проблема: {{res}}</li>
                        <li v-if="tab.edit != null">Последние изменение: {{tab.edit}}</li>
                        <li v-if="tab.editButton === true">
                            <form @submit.prevent="updateTab(tab)">
                                <label for="title">Новый заголовок</label>
                                <input id="title" type="text" v-model="tab.title" maxlength="30" placeholder="Заголовок">
                                <label for="description">Новое описание:</label> 
                                <textarea id="description" v-model="tab.description" cols="20" rows="5"></textarea>
                                <input type="submit" value="Редактировать">
                            </form>                      
                        </li>
                    </ul>
                    <a @click="nextTab(tab)">Следующая колонка</a>
                </li>
            </ul>
        </div>
    `,
    data(){
        return{

        }
    }
})

Vue.component('table_3',{
    template:`
        <div class="tab">
            <h2>Тестирование</h2>
            <ul class="tab-li">
                <li v-for="tab in column_3" v-if="tab.priori == 1">
                    <div class="separator"></div>
                    <a @click="tab.editButton = true">Редактировать</a><br>
                    <p class="tab-title">{{tab.title}}</p>
                    <ul class="tab-task">
                        <li>Описание: {{tab.description}}</li>
                        <li>Дата создания: {{tab.date}}</li>
                        <li>Дедлайн: {{tab.deadline}}</li>
                        <li v-if="tab.reason != null" v-for="res in tab.reason">Проблема: {{res}}</li>
                        <li v-if="tab.edit != null">Последние изменение: {{tab.edit}}</li>
                        <li v-if="tab.editButton === true">
                            <form @submit.prevent="updateTab(tab)">
                                <label for="title">Новый заголовок</label>
                                <input id="title" type="text" v-model="tab.title" maxlength="30" placeholder="Заголовок">
                                <label for="description">Новое описание:</label> 
                                <textarea id="description" v-model="tab.description" cols="20" rows="5"></textarea>
                                <input type="submit" value="Редактировать">
                            </form>                      
                        </li>
                        <li v-if="tab.refund">
                            <form @submit.prevent="refundTab(tab)">
                                <label for="reason">Причина: &emsp;</label> 
                                <textarea id="reason" v-model="reason"></textarea>
                                <input type="submit" value="Отправить">
                            </form>
                        </li>
                    </ul>
                    <a @click="tab.refund = true">Вернуть</a> &emsp; <a @click="nextTab(tab)">Следующая колонка</a>
                </li>
                <li v-for="tab in column_3" v-if="tab.priori == 2">
                    <div class="separator"></div>
                    <a @click="tab.editButton = true">Редактировать</a><br>
                    <p class="tab-title">{{tab.title}}</p>
                    <ul class="tab-task">
                        <li>Описание: {{tab.description}}</li>
                        <li>Дата создания: {{tab.date}}</li>
                        <li>Дедлайн: {{tab.deadline}}</li>
                        <li v-if="tab.reason != null" v-for="res in tab.reason">Проблема: {{res}}</li>
                        <li v-if="tab.edit != null">Последние изменение: {{tab.edit}}</li>
                        <li v-if="tab.editButton === true">
                            <form @submit.prevent="updateTab(tab)">
                                <label for="title">Новый заголовок</label>
                                <input id="title" type="text" v-model="tab.title" maxlength="30" placeholder="Заголовок">
                                <label for="description">Новое описание:</label> 
                                <textarea id="description" v-model="tab.description" cols="20" rows="5"></textarea>
                                <input type="submit" value="Редактировать">
                            </form>                      
                        </li>
                        <li v-if="tab.refund">
                            <form @submit.prevent="refundTab(tab)">
                                <label for="reason">Причина: &emsp;</label> 
                                <textarea id="reason" v-model="reason"></textarea>
                                <input type="submit" value="Отправить">
                            </form>
                        </li>
                    </ul>
                    <a @click="tab.refund = true">Вернуть</a> &emsp; <a @click="nextTab(tab)">Следующая колонка</a>
                </li>
                <li v-for="tab in column_3" v-if="tab.priori == 3">
                    <div class="separator"></div>
                    <a @click="tab.editButton = true">Редактировать</a><br>
                    <p class="tab-title">{{tab.title}}</p>
                    <ul class="tab-task">
                        <li>Описание: {{tab.description}}</li>
                        <li>Дата создания: {{tab.date}}</li>
                        <li>Дедлайн: {{tab.deadline}}</li>
                        <li v-if="tab.reason != null" v-for="res in tab.reason">Проблема: {{res}}</li>
                        <li v-if="tab.edit != null">Последние изменение: {{tab.edit}}</li>
                        <li v-if="tab.editButton === true">
                            <form @submit.prevent="updateTab(tab)">
                                <label for="title">Новый заголовок</label>
                                <input id="title" type="text" v-model="tab.title" maxlength="30" placeholder="Заголовок">
                                <label for="description">Новое описание:</label> 
                                <textarea id="description" v-model="tab.description" cols="20" rows="5"></textarea>
                                <input type="submit" value="Редактировать">
                            </form>                      
                        </li>
                        <li v-if="tab.refund">
                            <form @submit.prevent="refundTab(tab)">
                                <label for="reason">Причина: &emsp;</label> 
                                <textarea id="reason" v-model="reason"></textarea>
                                <input type="submit" value="Отправить">
                            </form>
                        </li>
                    </ul>
                    <a @click="tab.refund = true">Вернуть</a> &emsp; <a @click="nextTab(tab)">Следующая колонка</a>
                </li>
            </ul>
        </div>
    `,
    data(){
        return{
        }
    },
})

Vue.component('table_4',{
    template:`
        <div class="tab">
            <h2>Выполненные задачи</h2>
            <ul class="tab-li">
                <li v-for="tab in column_4" v-if="tab.priori == 1">
                    <div class="separator"></div>
                    <p class="tab-title">{{tab.title}}</p>
                    <ul class="tab-task">
                        <li>Описание: {{tab.description}}</li>
                        <li>Дата создания: {{tab.date}}</li>
                        <li>Дедлайн: {{tab.deadline}}</li>
                        <li v-if="tab.edit != null">Последние изменение: {{tab.edit}}</li>
                        <li v-if="tab.term">Завершено в срок</li>
                        <li v-else>В срок не завершено</li>
                    </ul>
                </li>
                <li v-for="tab in column_4" v-if="tab.priori == 2">
                    <div class="separator"></div>
                    <p class="tab-title">{{tab.title}}</p>
                    <ul class="tab-task">
                        <li>Описание: {{tab.description}}</li>
                        <li>Дата создания: {{tab.date}}</li>
                        <li>Дедлайн: {{tab.deadline}}</li>
                        <li v-if="tab.edit != null">Последние изменение: {{tab.edit}}</li>
                        <li v-if="tab.term">Завершено в срок</li>
                        <li v-else>В срок не завершено</li>
                    </ul>
                </li>
                <li v-for="tab in column_4" v-if="tab.priori == 3">
                    <div class="separator"></div>
                    <p class="tab-title">{{tab.title}}</p>
                    <ul class="tab-task">
                        <li>Описание: {{tab.description}}</li>
                        <li>Дата создания: {{tab.date}}</li>
                        <li>Дедлайн: {{tab.deadline}}</li>
                        <li v-if="tab.edit != null">Последние изменение: {{tab.edit}}</li>
                        <li v-if="tab.term">Завершено в срок</li>
                        <li v-else>В срок не завершено</li>
                    </ul>
                </li>
            </ul>
        </div>
    `,
})

Vue.component('newBoard', {
    template:`
        <section  class="section-modal">
            <button type="button" class="button" @click="show=true">Создать задачу</button>
            <div class="modal" v-if="show">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <slot name="header">
                                <button class="close" type="button" @click="close">×</button>
                            </slot>
                        </div>
                        <div class="modal-body">
                            <slot name="body">
                                <div class="create_form">
                                    <form class="create" @submit.prevent="onSubmit">
                                        <label for="title">Заголовок</label>
                                        <input id="title" v-model="title" type="text" placeholder="Заголовок" required maxlength="30">   
                                        <label for="description">Описание</label>
                                        <textarea id="description" v-model="description" rows="5" columns="10" required maxlength="60"></textarea>
                                        <label for="deadline">Дедлайн</label>
                                        <input id="deadline" type="date" v-model="deadline" placeholder="дд.мм.гггг" required>        
                                        <button type="submit">Создать</button>
                                    </form>
                                </div>
                            </slot>  
                        </div>
                    </div>
                </div>
            </div>
        </section>
    `,
    data(){
        return{
            title: null,
            description: null,
            date:null,
            deadline: null,
            show: false,
            reason: [],
        }
    },
    methods:{
        onSubmit(){
            let tab = {
                title: this.title,
                description: this.description,
                date: new Date(),
                deadline: this.deadline,
                edit: null,
                editButton: false,
                refund: false,
                term: true,
                reason: [],
            }
            eventBus.$emit('addColumn_1', tab);
            this.title = null;
            this.description = null;
            this.date = null;
            this.deadline = null;
            this.show = false;
        },
        close(){
            this.show = false;
        }
        }
})

let app = new Vue({
    el: '#app',
})

