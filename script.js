//your code here
let arr = document.querySelectorAll('.price');
let tbody = document.querySelector('tbody');
let sum=0;

for(let i=0;i<arr.length;i++){
	sum+=parseInt(arr[i].innerText);
}

console.log(sum);
let total = document.createElement('tr');
let col1 = document.createElement('td');
let col2 = document.createElement('td');

total.setAttribute('data-ns-test','grandTotal');

col1.innerText = 'Total';
col2.innerText = sum;
total.appendChild(col1);
total.appendChild(col2);

tbody.appendChild(total);