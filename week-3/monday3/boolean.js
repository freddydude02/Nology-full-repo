2 == '2'; truthy/truthy true
2 === 2; truthy/truthy true
2 === '2'; truthy/truthy false
'2' + 3 == 23; truthy/truthy/truthy true
'2' + 3 === 5; truthy/truthy/truthy false
10 % 3; truthy/truthy 1
10 % 3 === 1; truthy/truthy/truthy true
(100 % 7) % 5; truthy/truthy 2
(100 % 7) % 5 !== 0; truthy/truthy/truthy true
(100 % 7) % 9 == 2; truthy/truthy/truthy/truthy true
!(10 % 2); truthy/truthy true
!!!!((10 % 7) % 3); truthy/truthy/truthy false
10 % 3 === -1 % 2; truthy/truthy/truthy/truthy false
(892783 != '89278' + 3) == 0; truthy/truthy/truthy/truthy true

true && false;  false
false || true; true
true || false; true
true || false + true; true
true * false && false + true; false
10 && 123 && -1 && 3; truthy/truthy/truthy/truthy true 3
10 && 123 && 0 && 3; truthy/truthy/falsey/truthy false 0
(10 && (123 || '') && parseInt('Roisin')) || 23 / 23 - 1; truthy/truthy/falsey/falsey/truthy/truthy/truthy false
3 && 'Calum' && ('' || 26); thruthy/truthy/falsey/truthy true
3 && 'Remi' && (null || 86 * 0 || ('' + 1 && 'Cat' + 'Dog'));
truthy/truthy/falsey/truthy/falsey/falsey/truthy/truthy/truthy
true