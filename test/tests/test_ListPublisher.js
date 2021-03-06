// This script licensed under the MIT.
// http://orgachem.mit-license.org


var tsumekusa = require('../../lib');
var List = tsumekusa.List;
var ElementArray = tsumekusa.ElementArray;
var Paragraph = tsumekusa.Paragraph;


module.exports = {
  'Publish an unordered list': function(test) {
    var list = new List(List.ListType.UNORDERED);

    var arr1 = new ElementArray();
    var arr2 = new ElementArray();
    var arr3 = new ElementArray();

    var p1 = new Paragraph('Item1');
    var p2 = new Paragraph('Item2');
    var p3 = new Paragraph('Item3');
    var p4 = new Paragraph('Item4');
    var p5 = new Paragraph('Item5');

    arr1.addChild(p1);
    arr2.addChild(p2);
    arr2.addChild(p3);
    arr3.addChild(p4);
    arr3.addChild(p5);

    list.addListItem(arr1);
    list.addListItem(arr2);
    list.addListItem(arr3);

    var CORRECT = [
      '- Item1',
      '',
      '- Item2',
      '',
      '  Item3',
      '',
      '- Item4',
      '',
      '  Item5'
    ].join('\n');

    test.equal(list.publish(), CORRECT);
    test.done();
  },
  'Publish a nested list': function(test) {
    var list1 = new List(List.ListType.ORDERED);
    var list2 = new List(List.ListType.ORDERED);
    var list3 = new List(List.ListType.ORDERED);

    var arr1 = new ElementArray();
    var arr2 = new ElementArray();
    var arr3 = new ElementArray();
    var arr4 = new ElementArray();

    list1.addListItem(arr1);
    list1.addListItem(list2);

    list2.addListItem(arr2);
    list2.addListItem(list3);
    list2.addListItem(arr4);

    list3.addListItem(arr3);

    var p1 = new Paragraph('Item1');
    var p2 = new Paragraph('Item2');
    var p3 = new Paragraph('Item3');
    var p4 = new Paragraph('Item4');
    var p5 = new Paragraph('Item5');
    var p6 = new Paragraph('Item6');
    var p7 = new Paragraph('Item7');
    var p8 = new Paragraph('Item8');

    arr1.addChild(p1);
    arr1.addChild(p2);
    arr2.addChild(p3);
    arr2.addChild(p4);
    arr3.addChild(p5);
    arr3.addChild(p6);
    arr4.addChild(p7);
    arr4.addChild(p8);

    var CORRECT = [
      '1) Item1',
      '',
      '  Item2',
      '',
      '  1) Item3',
      '',
      '    Item4',
      '',
      '    1) Item5',
      '',
      '      Item6',
      '',
      '  2) Item7',
      '',
      '    Item8',
    ].join('\n');

    test.equal(list1.publish(), CORRECT);
    test.done();
  }
};
