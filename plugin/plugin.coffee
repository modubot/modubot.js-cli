class Plugin

  constructor: (@bot) ->
    @client = bot.client
    @commands =
      'example': 'onCommandExample'

  onCommandExample: (from, to, message, args) ->

module.exports =
  Plugin: Plugin