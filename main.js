//local storage lab





//run funtions to display on page load:
print_word1();
add_page_count();

print_list()

document.querySelector('#button2').addEventListener('click', add_list_item);
document.querySelector('#clear_button').addEventListener('click', clear_list);

document.querySelector('#button1').addEventListener('click', function(){

    let word1 = document.querySelector('#word1').value;
    localStorage.setItem('word1',word1);

    print_word1();

})

//functions

//print_word1
function print_word1()
{
    let x = localStorage.getItem('word1');
    document.querySelector('#result1').innerText = x;
}

//add_page_count
function add_page_count()
{
    if(localStorage.getItem('page_count'))
    {
        let current_count = parseInt(localStorage.getItem('page_count'));
        localStorage.setItem('page_count', current_count+1);
    }
    else    
        localStorage.setItem('page_count', '1');
    

    let new_count = localStorage.getItem('page_count');

    document.querySelector('#page_count').innerText = new_count;
}

//add_list_item
function add_list_item()
{
    let new_list_item = document.querySelector('#list_item').value;

    //checking to see if users_list exists yet
    if(localStorage.getItem('users_list'))
    {

        let users_list = JSON.parse(localStorage.getItem('users_list'));
        users_list.push(new_list_item);

        localStorage.setItem('users_list', JSON.stringify(users_list));
        print_list();
    }

    else
        localStorage.setItem('users_list', `["${new_list_item}"]`);
        print_list();
        
}

//print_list
function print_list()
{
    if(localStorage.getItem('users_list'))
    {
        let users_list = JSON.parse(localStorage.getItem('users_list'));

        let list = document.querySelector('#list');
        list.innerHTML = '';

        for(let item of users_list)
        {
            const new_element = document.createElement('li');
            new_element.innerText = item;

            list.appendChild(new_element);
        }
    }
    else
        document.querySelector('#list').innerHTML = '';
}

//clear_list
function clear_list()
{
    localStorage.setItem('users_list', '');
    document.querySelector('#list').innerHTML = '';
}

