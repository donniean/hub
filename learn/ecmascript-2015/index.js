const separate = title => {
    const separation = "========================";
    console.log(`
${ separation } ${ title || "" } ${ separation }
`);
};

separate("暂时性死区");

// TDZ (temporal dead zone)
console.log(`TDZ:`, typeof foo); // undefined
{
    // 暂时性死区只是块级绑定的一个独特表现
    const foo = "bar";
    console.log(`TDZ:`, typeof foo); // string
}

separate("const 能够在 for-in 与 for-of 循环内工作");

// const 能够在 for-in 与 for-of 循环内工作，但是不能再 for 循环内工作。
// 因为循环为每次迭代创建了一个新的变量绑定，而不是像 for 循环那样试图去修改已绑定的变量的值。
{
    const list = ["a", "b", "c"];
    for (const value of list) {
        console.log(`for...of:`, value); // a, b, c
    }
}

separate("不能使用 let 或 const 来覆盖一个全局变量");

// 在全局作用域上使用 let 或 const ，虽然在全局作用域上会创建新的绑定，但不会有任何属性被添加到全局对象上
// 这也就意味着你不能使用 let 或 const 来覆盖一个全局变量，你只能将其遮蔽
var Global = (typeof window === "undefined") ? global : window;
const testGlobal = 1;
console.log(`let和const是否会覆盖全局变量:`, Global.testGlobal === testGlobal); // false

separate("Object.is()");

{
    console.log(`Object.is(-1, +0):`, Object.is(-1, +0)); // false
    console.log(`Object.is(NaN, NaN):`, Object.is(NaN, NaN)); // true
}
