// This script licensed under the MIT.
// http://orgachem.mit-license.org


var basePath = '../../lib';
var util = require(basePath + '/util');
var WordWrapper = require(basePath + '/publishing/WordWrapper');
var Indent = require(basePath + '/publishing/Indent');
var BlockElementPublisher = require(basePath +
    '/publishing/BlockElementPublisher');



/**
 * A class for paragraph publisher for vim help.
 * @constructor
 * @extends {tsumekusa.publishing.BlockElementPublisher}
 */
var ParagraphPublisher = function() {
  BlockElementPublisher.call(this);
};
util.inherits(ParagraphPublisher, BlockElementPublisher);
util.addSingletonGetter(ParagraphPublisher);


/** @override */
ParagraphPublisher.prototype.publish = function(paragraph) {
  var indent = new Indent(this.getIndentWidth(paragraph));
  var wrapper = new WordWrapper(this.getDisplayWidth(), indent);

  return wrapper.wrap(paragraph.getInlineElements());
};


// Export the constructor
module.exports = ParagraphPublisher;