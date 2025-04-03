const List<List<String>> levels = [
  [
    r"    #####",
    r"    #---#",
    r"    #$--#",
    r"  ###--$###",
    r"  #--$--$-#",
    r"###-#-###-#     ######",
    r"#---#-###-#######--..#",
    r"#-$--$-------------..#",
    r"#####-####-#@####--..#",
    r"    #------###  ######",
    r"    ########",
  ],
  [
    r"############",
    r"#..--#-----###",
    r"#..--#-$--$--#",
    r"#..--#$####--#",
    r"#..----@-##--#",
    r"#..--#-#--$-##",
    r"######-##$-$-#",
    r"  #-$--$-$-$-#",
    r"  #----#-----#",
    r"  ############",
  ],
  [
    r"        ########",
    r"        #-----@#",
    r"        #-$#$-##",
    r"        #-$--$#",
    r"        ##$-$-#",
    r"#########-$-#-###",
    r"#....--##-$--$--#",
    r"##...----$--$---#",
    r"#....--##########",
    r"########",
  ],
  [
    r"              ########",
    r"              #--....#",
    r"   ############--....#",
    r"   #----#--$-$---....#",
    r"   #-$$$#$--$-#--....#",
    r"   #--$-----$-#--....#",
    r"   #-$$-#$-$-$########",
    r"####--$-#-----#",
    r"#---#-#########",
    r"#----$--##",
    r"#-$$#$$-@#",
    r"#---#---##",
    r"#########",
  ],
  [
    r"        #####",
    r"        #---#####",
    r"        #-#$##--#",
    r"        #-----$-#",
    r"#########-###---#",
    r"#....--##-$--$###",
    r"#....----$-$$-##",
    r"#....--##$--$-@#",
    r"#########--$--##",
    r"        #-$-$--#",
    r"        ###-##-#",
    r"          #----#",
    r"          ######",
  ],
  [
    r"######  ###",
    r"#..--# ##@##",
    r"#..--###---#",
    r"#..-----$$-#",
    r"#..--#-#-$-#",
    r"#..###-#-$-#",
    r"####-$-#$--#",
    r"   #--$#-$-#",
    r"   #-$--$--#",
    r"   #--##---#",
    r"   #########",
  ],
  [
    r"       #####",
    r" #######---##",
    r"##-#-@##-$$-#",
    r"#----$------#",
    r"#--$--###---#",
    r"###-#####$###",
    r"#-$--###-..#",
    r"#-$-$-$-...#",
    r"#----###...#",
    r"#-$$-# #...#",
    r"#--### #####",
    r"####",
  ],
  [
    r"  ####",
    r"  #--###########",
    r"  #----$---$-$-#",
    r"  #-$#-$-#--$--#",
    r"  #--$-$--#----#",
    r"###-$#-#--####-#",
    r"#@#$-$-$--##---#",
    r"#----$-#$#---#-#",
    r"##--$----$-$-$-#",
    r" ####--#########",
    r"  ###--###",
    r"  #------#",
    r"  #------#",
    r"  #......#",
    r"  #......#",
    r"  #......#",
    r"  ########",
  ],
  [
    r"          #######",
    r"          #--...#",
    r"      #####--...#",
    r"      #------...#",
    r"      #--##--...#",
    r"      ##-##--...#",
    r"     ###-########",
    r"     #-$$$-##",
    r" #####--$-$-#####",
    r"##---#$-$---#---#",
    r"#@-$--$----$--$-#",
    r"######-$$-$-#####",
    r"     #-$----#",
    r"     ####-###",
    r"        #--#",
    r"        #--#",
    r"        #--#",
    r"        ####",
  ],
  [
    r"              ####",
    r"         ######--#",
    r"         #-------#",
    r"         #--####-###",
    r" ###  #####-###----#",
    r"##@####---$$$-#----#",
    r"#-$$---$$-$---#....##",
    r"#--$$$#----$--#.....#",
    r"#-$---#-$$-$$-#.....#",
    r"###---#--$----#.....#",
    r"  #---#-$-$-$-#.....#",
    r"  #-#######-###.....#",
    r"  #---#--$-$--#.....#",
    r"  ###-#-$$-$-$#######",
    r"    #-#--$------#",
    r"    #-#-$$$-$$$-#",
    r"    #-#-------#-#",
    r"    #-#########-#",
    r"    #-----------#",
    r"    #############",
  ],
  [
    r"          ####",
    r"     #### #--#",
    r"   ###--###$-#",
    r"  ##---@--$--#",
    r" ##--$-$$##-##",
    r" #--#$##-----#",
    r" #-#-$-$$-#-###",
    r" #---$-#--#-$-#####",
    r"####----#--$$-#---#",
    r"####-##-$---------#",
    r"#.----###--########",
    r"#..-..# ####",
    r"#...#.#",
    r"#.....#",
    r"#######",
  ],
  [
    r"  #########",
    r"  #*.*#*.*#",
    r"  #.*.*.*.#",
    r"  #*.*.*.*#",
    r"  #.*.*.*.#",
    r"  #*.*.*.*#",
    r"  ###---###",
    r"    #---#",
    r"######-######",
    r"#-----------#",
    r"#-$-$-$-$-$-#",
    r"##-$-$-$-$-##",
    r" #$-$-$-$-$#",
    r" #---$@$---#",
    r" #--#####--#",
    r" ####   ####",
  ],
  [
    r"    #########",
    r"  ###---##--#####",
    r"###------#--#---####",
    r"#--$$-#$-#--#--...-#",
    r"#-#--$#@$##-#-#.#.-#",
    r"#--##-#$--#----...-#",
    r"#-$#----$-#-#-#.#.-#",
    r"#----##--##$-$-...-#",
    r"#-$-##---#--#$#.#.-#",
    r"##-$$--$---$--$...-#",
    r" #$--######----##--#",
    r" #---#    ##########",
    r" #####",
  ],
  [
    r"################",
    r"#--------------#",
    r"#-#-######-----#",
    r"#-#--$-$-$-$#--#",
    r"#-#---$@$---##-##",
    r"#-#-#$-$-$###...#",
    r"#-#---$-$--##...#",
    r"#-###$$$-$-##...#",
    r"#-----#-##-##...#",
    r"#####---##-##...#",
    r"    #####-----###",
    r"        #-----#",
    r"        #######",
  ],
  [
    r"       ####",
    r"    ####--#",
    r"   ##--#--#",
    r"   #--$-$-#",
    r" ###-#$---####",
    r" #--$--##$---#",
    r" #--#-@-$-#-$#",
    r" #--#------$-####",
    r" ##-####$##-----#",
    r" #-$#.....#-#---#",
    r" #--$...*.-$#-###",
    r"##--#.....#---#",
    r"#---###-#######",
    r"#-$$--#--#",
    r"#--#-----#",
    r"######---#",
    r"     #####",
  ],
  [
    r"#####",
    r"#---##",
    r"#----#  ####",
    r"#-$--####--#",
    r"#--$$-$---$#",
    r"###@-#$----##",
    r" #--##--$-$-##",
    r" #-$--##-##-.#",
    r" #--#$##$--#.#",
    r" ###---$..##.#",
    r"  #----#.*...#",
    r"  #-$$-#.....#",
    r"  #--#########",
    r"  #--#",
    r"  ####",
  ],
  [
    r"       #######",
    r" #######-----#",
    r" #-----#-$@$-#",
    r" #$$-#---#########",
    r" #-###......##---#",
    r" #---$......##-#-#",
    r" #-###......-----#",
    r"##---####-###-#$##",
    r"#--#$---#--$--#-#",
    r"#--$-$$$--#-$##-#",
    r"#---$-$-###$$-#-#",
    r"#####-----$---#-#",
    r"    ###-###---#-#",
    r"      #-----#---#",
    r"      ########--#",
    r"             ####",
  ],
  [
    r"      ############",
    r"      #--.--##---#",
    r"      #-#.-----@-#",
    r" ######-##...#-####",
    r"##--##...####-----####",
    r"#-$-##...----$-#--$--#",
    r"#-----..-##-#-##-##--#",
    r"####$###$#-$--#---#-##",
    r" ###--#----##$-$$-#-#",
    r" #---$$-#-#-$-#-$##-#",
    r" #------------------#",
    r" #################--#",
    r"                 ####",
  ],
  [
    r"        ######",
    r"        #---@####",
    r"      #####-$---#",
    r"      #---##----####",
    r"      #-$##--##----#",
    r"      #---#--#####-#",
    r"      #-#$$-$----#-#",
    r"      #--$-$-###-#-#",
    r"      #-#---$--#-#-#",
    r"      #-#--#$#---#-#",
    r"     ##-####---#-#-#",
    r"     #--$--#####-#-# ####",
    r"    ##----$-----$--###--####",
    r"#####--###-$-$#-$-#---.....#",
    r"#-----##------#--##--#.....#",
    r"#-$$$$----######$##---#.##.#",
    r"##----##--------------#....#",
    r" ##--###############---....#",
    r"  #--#             #####--##",
    r"  ####                 ####",
  ],
  [
    r"       ############",
    r"       #..........#",
    r"     ###.#.#.#.#..#",
    r"     #---.........#",
    r"     #@-$-$-$-*.*.#",
    r"    #######-#######",
    r" ####---#----##--#",
    r"##----$-#----#-$-##",
    r"#--#$#-###-###$---##",
    r"#-$--$-$---#-$-$-$-#",
    r"#--#-$-##-------#$-#",
    r"#---$####$####$##--#",
    r"####--##---#----#--#",
    r"   #$-##---#-#-$$--#",
    r"   #---#-$-#--$----#",
    r"   ###-#-$$-#--$-###",
    r"     #-#----#-$-##",
    r"     #-########-#",
    r"     #----------#",
    r"     ############",
  ],
  [
    r"   ##########",
    r"   #..--#---#",
    r"   #..------#",
    r"   #..--#--####",
    r"  #######--#--##",
    r"  #------------#",
    r"  #--#--##--#--#",
    r"####-##--####-##",
    r"#--$--#####-#--#",
    r"#-#-$--$--#-$--#",
    r"#-@$--$---#---##",
    r"####-##-#######",
    r"   #----#",
    r"   ######",
  ],
  [
    r"            ####",
    r" ############--#####",
    r" #----#--#--$--#---##",
    r" #-$-$-$--$-#-$-$---#",
    r" ##$-$---#-@#-$---$-#",
    r"###---############-##",
    r"#--$-$#--#......#-$#",
    r"#-#---#--#......##-#",
    r"#--##-##-#-.....#--#",
    r"#-#------$......-$-#",
    r"#-#-$-##-#......#--#",
    r"#--$-$#--#......#-$#",
    r"#-$---#--##$#####--#",
    r"#-$-$-####-$-$--$-$#",
    r"##-#-----$-$-$-$---###",
    r" #--######-$----$----#",
    r" #---------#-#######-#",
    r" #######-#$----------#",
    r"       #---###########",
    r"       #####",
  ],
  [
    r"       #######",
    r"       #--#--####",
    r"       #-$#$-#--##",
    r"########--#--#---########",
    r"#....--#-$#$-#--$#--#---#",
    r"#....#-#-----#$--#------#",
    r"#..#.----$#--#-$----#$--#",
    r"#...-@##--#$-#$--#--#---#",
    r"#....-##-$#-----$########",
    r"########--#$$#$--#",
    r"       #-$#--#--$#",
    r"       #--#--#---#",
    r"       ####--#####",
    r"          ####",
  ],
  [
    r"   ##########",
    r"   #........####",
    r"   #.#.#....#--#",
    r"   #........$$-#",
    r"   #-----.###--####",
    r" #########--$-#---#",
    r" #-----$---$-$--$-#",
    r" #--#----#--$-$#--#",
    r" ##-#####---#--#--#",
    r" #-$-----#---####-#",
    r"##--$#---#-##--#--#",
    r"#----##$###----#--##",
    r"#-$----$-#--#--#---#",
    r"#####----#-##-#-##-##",
    r"    #$#-#--$--$-$---#",
    r"    #@#--$#$$$--#---#",
    r"    ###--$------#####",
    r"      ##--#--#--#",
    r"       ##########",
  ],
  [
    r"               ####",
    r"          ######--#####",
    r"    #######-------#---#",
    r"    #------$-$-##-#-#-#",
    r"    #--####-$--#-----.#",
    r"    #------$-#-#-##.#.#",
    r"    ##$####$-$-$-##.#.#",
    r"    #-----#----####.###",
    r"    #-$---######--#.#.#",
    r"######$$$##------@#.#.#",
    r"#------#----#$#$###.-.#",
    r"#-####-#$$$$$----#-...#",
    r"#-#----$-----#---#-...#",
    r"#-#---##-##-----###...#",
    r"#-######$######--######",
    r"#--------#    #--#",
    r"##########    ####",
  ],
  [
    r"#########",
    r"#-------#",
    r"#-------####",
    r"##-####-#--#",
    r"##-#@##----#",
    r"#-$$$-$--$$#",
    r"#--#-##-$--#",
    r"#--#-##--$-####",
    r"####--$$$-$#--#",
    r" #---##---....#",
    r" #-#---#-#..-.#",
    r" #---#-#-##...#",
    r" #####-$--#...#",
    r"     ##---#####",
    r"      #####",
  ],
  [
    r" #################",
    r" #...---#----#---###",
    r"##.....--$##-#-#-$-#",
    r"#......#--$--#--$--#",
    r"#......#--#--#-#-#-##",
    r"#########-$--$-#-#--###",
    r"  #-----#$##$-##-##---#",
    r" ##---$----#-$--$---#-#",
    r" #--##-###-#--#####$#-#",
    r" #-$-$$-----$---$-----#",
    r" #-$----$##$-########-#",
    r" #######--@-##      ###",
    r"       ######",
  ],
  [
    r"     #######",
    r"     #@-#--#",
    r"     #-$---#",
    r"    ###-##-#",
    r" ####-$--#-##",
    r" #-------#--##",
    r" #-$-$####-$-#",
    r" #-$$-#--#--$#",
    r" #$--$---#$--#",
    r"##--$$#---$$-##",
    r"#-$$--#--#--$-#",
    r"#-----####-$--#",
    r"#--#$##..##---#",
    r"###-.#....#####",
    r"  #-.......##",
    r"  #....---..#",
    r"  ###########",
  ],
  [
    r"                #####",
    r"       ###### ###---####",
    r"   #####----###-$-$--$-#",
    r"####--##-#$-$----$-#---#",
    r"#....---$$-$-$--$---#$##",
    r"#..-#-##-#---###$##-#--#",
    r"#....----#-###----#----#",
    r"#....----#-##--$--###$-#",
    r"#..######--$--#--####-##",
    r"####    #---###----@--#",
    r"        ###############",
  ],
  [
    r" #####",
    r" #---#######",
    r" #-$-###---#",
    r" #-$----$$-#",
    r" ##-####---#",
    r"###-#--#-###",
    r"#---#--#@##",
    r"#-$$----$-#",
    r"#---#-#-$-####",
    r"#####-#---#--#",
    r" #---$####---#",
    r" #--$-----$--#",
    r" ##---#####-##",
    r" ##########--#",
    r"##....#-$--$-#",
    r"#.....#-$$#--#",
    r"#..-..#-$--$-#",
    r"#.....$---#--#",
    r"##--##########",
    r" ####",
  ],
  [
    r" #######",
    r" #--#--#####",
    r"##--#--#...###",
    r"#--$#--#...--#",
    r"#-$-#$$-...--#",
    r"#--$#--#...-.#",
    r"#---#-$########",
    r"##$-------$-$-#",
    r"##--#--$$-#---#",
    r" ######--##$$@#",
    r"      #------##",
    r"      ########",
  ],
  [
    r"  ####",
    r"  #--#########",
    r" ##--##-@#---#",
    r" #--$#-$-$---####",
    r" #$--$--#-$-$#--##",
    r"##--$##-#$-$-----#",
    r"#--#--#-#---$$$--#",
    r"#-$----$--$##-####",
    r"#-$-$-#$#--#--#",
    r"##--###--###$-#",
    r" #--#....-----#",
    r" ####......####",
    r"   #....####",
    r"   #...##",
    r"   #...#",
    r"   #####",
  ],
  [
    r"      ####",
    r"  #####--#",
    r" ##-----$#",
    r"##-$--##-###",
    r"#@$-$-#-$--#",
    r"####-##---$#",
    r" #....#$-$-#",
    r" #....#---$#",
    r" #....--$$-##",
    r" #...-#-$---#",
    r" ######$-$--#",
    r"      #---###",
    r"      #$-###",
    r"      #--#",
    r"      ####",
  ],
  [
    r"############",
    r"##-----##--#",
    r"##---$---$-#",
    r"####-##-$$-#",
    r"#---$-#----#",
    r"#-$$$-#-####",
    r"#---#-#-$-##",
    r"#--#--#--$-#",
    r"#-$#-$#----#",
    r"#---..#-####",
    r"####..-$-#@#",
    r"#.....#-$#-#",
    r"##....#--$-#",
    r"###..##----#",
    r"############",
  ],
  [
    r"############  ######",
    r"#---#----#@####....#",
    r"#---$$#-------.....#",
    r"#---#-###---##-....#",
    r"##-##-###--#---....#",
    r" #-$-$-----#-##-####",
    r" #--$-$##--#-------#",
    r"####-#--####-##-##-#",
    r"#--#-#$---##-##----#",
    r"#-$--$--#-##-#######",
    r"#-#-$-$----#-#",
    r"#--$-##-##-#-#",
    r"#-$$-----$$--#",
    r"##-##-###-$--#",
    r" #----# #----#",
    r" ###### ######",
  ],
  [
    r"     ####",
    r"   ###--##",
    r"####--$--#",
    r"#---$-$--####",
    r"#-$---#-$---# ####",
    r"#--#--#---$-# #..#",
    r"##$#$-####$####..#",
    r" #---#####-##-...#",
    r" #$#-##@##-##--..#",
    r" #-#----$-----...#",
    r" #---####-###--..#",
    r" ###-##-#--##-...#",
    r"  ##$-####$-###..#",
    r"  #---##----# #..#",
    r" ##-$$##--$-# ####",
    r" #-----$$$$-#",
    r" #-$-###----#",
    r" #---# ######",
    r" #####",
  ],
  [
    r"###########",
    r"#......---#########",
    r"#......---#--##---#",
    r"#..###-$----$-----#",
    r"#...-$-$-#--###---#",
    r"#...#$#####----#--#",
    r"###----#---#$--#-$###",
    r"  #--$$-$-$--$##--$-#",
    r"  #--$---#$#--##----#",
    r"  ###-##-#--$-#######",
    r"   #--$-$-##-##",
    r"   #----$--$--#",
    r"   ##---#-#---#",
    r"    #####@#####",
    r"        ###",
  ],
  [
    r" #########",
    r" #....---##",
    r" #.#.#--$-##",
    r"##....#-#-@##",
    r"#-....#--#--##",
    r"#-----#$-##$-#",
    r"##-###--$----#",
    r" #$--$-$-$#--#",
    r" #-#--$-$-##-#",
    r" #--###--##--#",
    r" #----##-##-##",
    r" #--$-#--$--#",
    r" ###$-$---###",
    r"   #--#####",
    r"   ####",
  ],
  [
    r"              ###",
    r"             ##.###",
    r"             #....#",
    r" #############....#",
    r"##---##-----##....#####",
    r"#--$$##--$-@##....----#",
    r"#------$$-$#--....#---#",
    r"#--$-##-$$-#-#....#--##",
    r"#--$-##-$--#-##-###--#",
    r"##-#####-###---------#",
    r"##---$--$-#####-###--#",
    r"#-$###--#-#####-#-####",
    r"#---$---#-------#",
    r"#--$-#$-$-$###--#",
    r"#-$$$#-$---# ####",
    r"#----#--$$-#",
    r"######---###",
    r"     #####",
  ],
  [
    r"      ####",
    r"#######-@#",
    r"#-----$--#",
    r"#---$##-$#",
    r"##$#...#-#",
    r" #-$...--#",
    r" #-#.-.#-##",
    r" #---#-#$-#",
    r" #$--$----#",
    r" #--#######",
    r" ####",
  ],
  [
    r"           #####",
    r"          ##---##",
    r"         ##-----#",
    r"        ##--$$--#",
    r"       ##-$$--$-#",
    r"       #-$----$-#",
    r"####   #---$$-#####",
    r"#--########-##----#",
    r"#..-----------$$$@#",
    r"#.#-#######-##---##",
    r"#.#-#######.-#$-$###",
    r"#...........-#---$-#",
    r"##############--$--#",
    r"             ##--###",
    r"              ####",
  ],
  [
    r" ########",
    r" #@##---####",
    r" #-$---$---#",
    r" #--$-$-$$$#",
    r" #-$$#-#---#",
    r"##$----$---#",
    r"#--$--$$$$$##",
    r"#-$####-#---#",
    r"#--$....#---#",
    r"#-##....#$$-#",
    r"#-##....---##",
    r"#---....#--#",
    r"##-#....#$$#",
    r" #-#....#--#",
    r" #---------#",
    r" ####-##$###",
    r"    #----#",
    r"    ######",
  ],
  [
    r"    ############",
    r"    #----------##",
    r"    #--#-#$$-$--#",
    r"    #$-#$#--##-@#",
    r"   ##-##-#-$-#-##",
    r"   #---$-#$--#-#",
    r"   #---#-$---#-#",
    r"   ##-$-$---##-#",
    r"   #--#--##--$-#",
    r"   #----##-$$#-#",
    r"######$$---#---#",
    r"#....#--########",
    r"#.#...-##",
    r"#....---#",
    r"#....---#",
    r"#########",
  ],
  [
    r"      ######",
    r"   #####---#",
    r"   #---#-#-#####",
    r"   #-$-#--$----######",
    r"  ##$--###-##-------#",
    r"###--$$-$-$-#--##---#####",
    r"#-------$---######-##---#",
    r"#--########-#@---#-#--#-#",
    r"##-###------####-#$#-#--#",
    r" #-###-####-##..-#---$-##",
    r" #--$--$--#$##..-#$##--##",
    r" #--#-#-#-----..##-##-$-#",
    r" ####---#-##-#..#----$--#",
    r"    #####----#..#-#-#--##",
    r"        ######..#---#-##",
    r"             #..#####--#",
    r"             #..-------#",
    r"             ##--###--##",
    r"              #########",
  ],
  [
    r"        #######",
    r"    #####--#--####",
    r"    #---#---$----#",
    r" ####-#$$-##-##--#",
    r"##------#-#--##-###",
    r"#--###-$#$--$--$--#",
    r"#...----#-##--#---#",
    r"#...#----@-#-###-##",
    r"#...#--###--$--$--#",
    r"######## ##---#---#",
    r"          #########",
  ],
  [
    r"    #########  ####",
    r"    #---##--####--#",
    r"    #---$---#--$--#",
    r"    #--#-##-#-----####",
    r"    ##-$---$-$$#-#---#",
    r"    ####--#--#-$-$---#",
    r"#####--####----###...#",
    r"#---#$-#--#-####.....#",
    r"#------#--#-#-##.....#",
    r"######-#--#$---###...#",
    r"   #---##-#-$#---#...#",
    r"  ##-------$--$#-#####",
    r" ##-$$$##--#-$---#",
    r" #---#--#-###--###",
    r" #---$--#$-@####",
    r" #####--#---#",
    r"     ########",
  ],
  [
    r" #####",
    r" #---#",
    r" #-#-######",
    r" #------$@######",
    r" #-$-##$-###---#",
    r" #-####-$----$-#",
    r" #-#####-#--#$-####",
    r"##--####-##$------#",
    r"#--$#--$--#-##-##-#",
    r"#---------#-#...#-#",
    r"######--###--...--#",
    r"     #### #-#...#-#",
    r"          #-###-#-#",
    r"          #-------#",
    r"          #########",
  ],
  [
    r"       ####",
    r"       #--##",
    r"       #---##",
    r"       #-$$-##",
    r"     ###$--$-##",
    r"  ####----$---#",
    r"###--#-#####--#",
    r"#----#-#....$-#",
    r"#-#---$-....#-#",
    r"#--$-#-#.*..#-#",
    r"###--####-###-#",
    r"  ####-@$--##$##",
    r"     ###-$-----#",
    r"       #--##---#",
    r"       #########",
  ],
  [
    r"      ############",
    r"     ##..----#---#",
    r"    ##..*-$----$-#",
    r"   ##..*.#-#-#$-##",
    r"   #..*.#-#-#-$--#",
    r"####...#--#----#-#",
    r"#--##-#----------#",
    r"#-@$-$-###--#-#-##",
    r"#-$---$---#-#---#",
    r"###$$---#-#-#-#-#",
    r"  #---$---#-#-#####",
    r"  #-$#-#####------#",
    r"  #$---#   #---#--#",
    r"  #--###   ##-----#",
    r"  #--#      #----##",
    r"  ####      ######",
  ],
  [
    r"     #############",
    r"     #----###----#",
    r"     #-----$-$--####",
    r"   ####-#---$-$----#",
    r"  ##-$--#$####-$-$-#",
    r"###---#-#---###--$-#",
    r"#-$--$--#--$--#-####",
    r"#-##$####-#$#--$--###",
    r"#-##--###-#-#-#--$--#",
    r"#----@$---$---#-$-#-#",
    r"#####--#--##--#-$#--#",
    r"  #...-#####$--#--#-#",
    r"  #.......#-$$-#$-#-#",
    r"  #.......#---------#",
    r"  #.......#######--##",
    r"  #########     ####",
  ],
  [
    r"##### ####",
    r"#...# #--####",
    r"#...###--$--#",
    r"#....##-$--$###",
    r"##....##---$--#",
    r"###...-##-$-$-#",
    r"#-##----#--$--#",
    r"#--##-#-###-####",
    r"#-$-#-#$--$----#",
    r"#--$-@-$----$--#",
    r"#---#-$-$$-$-###",
    r"#--######--###",
    r"#-##    ####",
    r"###",
  ],
  [
    r" ####",
    r"##--#####",
    r"#-------#-#####",
    r"#-$###--###---#",
    r"#..#--$#-#--#-#",
    r"#..#------$$#-###",
    r"#.*#-#--#$-$----#####",
    r"#..#--##-----##$#---#",
    r"#.*$--$-#-##--$-----#",
    r"#..##--$---#---######",
    r"#.*##$##---#####",
    r"#..--$-#####",
    r"#--#-@-#",
    r"########",
  ],
  [
    r"   ##########",
    r"   #--###---#",
    r"   #-$---$--#",
    r"   #--####$##",
    r"   ##-#--#--#",
    r"  ##--#.*---#",
    r"  #--##..#--#",
    r"  #-@-#.*#-##",
    r"  #-#$#..#$-#",
    r"  #-$-#..#--#",
    r"  #-#-#**#--#",
    r"  #-$-#..#$##",
    r"  #----.*#--#",
    r" ###--#--#--#",
    r"##----####--#",
    r"#--#######$##",
    r"#-$------$--#",
    r"#--##---#---#",
    r"#############",
  ],
  [
    r" #####################",
    r" #---##--#---#---#---#",
    r" #-$-----$---$---$---##",
    r"#####-#--#---###-##$###",
    r"#---#-##$######---#---#",
    r"#-$---#-......#---#-$-#",
    r"##-#--#-......#####---#",
    r"##-#########..#---#-###",
    r"#----------#..#-$---#",
    r"#-##-###-###..##-#--###",
    r"#-#---#---##..##-###--#",
    r"#---@------$..#-------#",
    r"#-#---#---##--#---##--#",
    r"#####-##############-##",
    r"#----------#---#----$-#",
    r"#-$--#-$-$-$---#-#----#",
    r"#-#$##-$#--##-##----#-#",
    r"#--$-$$-####-$--$-#-#-#",
    r"#----------#---#------#",
    r"#######################",
  ],
  [
    r" #####################",
    r"##-------------------#",
    r"#----$-#------##-#---#",
    r"#--######-###--#$##-##",
    r"##$#---##$#....---#-#",
    r"#--#----$-#....##-#-#",
    r"#-$-#-#-#-#....##---#",
    r"#-$-#$$---#....##$#-#",
    r"#-#-$@$##$#....##---#",
    r"#---$$$---#....#----#",
    r"#--$#---#-######-$###",
    r"##--#-###$$--$---$-#",
    r"##-----#-$--$-##---#",
    r" #####---#---#######",
    r"     #########",
  ],
  [
    r"##########",
    r"#--------####",
    r"#-######-#--##",
    r"#-#-$-$-$--$-#",
    r"#-------#$---#",
    r"###$--$$#--###",
    r"  #--##-#-$##",
    r"  ##$#---$-@#",
    r"   #--$-$-###",
    r"   #-#---$--#",
    r"   #-##---#-#",
    r"  ##--#####-#",
    r"  #---------#",
    r"  #.......###",
    r"  #.......#",
    r"  #########",
  ],
  [
    r"         ####",
    r" #########--##",
    r"##--$------$-#####",
    r"#---##-##---##...#",
    r"#-#$$-$-$$#$##...#",
    r"#-#----@--#---...#",
    r"#--$#-###$$---...#",
    r"#-$--$$--$-##....#",
    r"###$-------#######",
    r"  #--#######",
    r"  ####",
  ],
  [
    r"              ######",
    r"          #####----#",
    r"          #--##-#--#####",
    r"          #---*.#..#---#",
    r" ##### ####-$#.#...----#",
    r" #---###--##-#*....##-##",
    r" #-$------##-#..#..##-#",
    r"######-#---#-#*.#####-#",
    r"#---#-$#$#-#-#..#####-#",
    r"#-$--$-----#-#*.----#-#",
    r"##-##--$-###-#--##--#-#",
    r" #--$--$-###-#####-##-#",
    r" ###$###$###--####-##-#",
    r"####-#---------###--#-#",
    r"#--$-#--$####--###$$#@#####",
    r"#------$-# #--####--#$#---#",
    r"####-#--$# #--------------#",
    r"   #--$--# ##--##--########",
    r"   ##--###  ########",
    r"    ####",
  ],
  [
    r"         ####",
    r"         #--#",
    r"         #--########",
    r"   #######--#------#",
    r"   #---#-#-#-#-#---##",
    r"   #-$-----$--##--$-#",
    r"  ###-$#-#--#-#-----#########",
    r"  #--$--#--$#-#-$$-#---#-#--#",
    r" ##-#---#-----###----$-#-#--#",
    r" #--#$---#-###--#--#-$$#-#--#",
    r" #----$##-$--#---##-$--#-#-##",
    r"####$-$-#----##--#---$----..#",
    r"#--#----###-#-$-$-###--###.*#",
    r"#-----##--$$-@--$-----##....#",
    r"#--##--##---$--#$#--##....*.#",
    r"##-#--$--#-#-$##--##....*.###",
    r"##-##--$--#-$-#--#....*.###",
    r"#----$-####---#-....*.###",
    r"#---#--#  #--#--..*.###",
    r"########  ###########",
  ],
  [
    r"        #####",
    r"        #---####",
    r"        #-$----####  ####",
    r"        #---#-$#--####--#",
    r"###########-#---$---#---#",
    r"#..-----#-$--####-#--#--#",
    r"#..$--#---$--#--$-#-$-.##",
    r"#.*#-#-$-$-##--##----#.#",
    r"#..#$-@-#---##----$$-#.#",
    r"#..#-$-$--$-$-##---##-.#",
    r"#.*$$-#-##---$-#$#-$-#.#",
    r"#..#------##---#-----#.#",
    r"#..#######--###-######.##",
    r"#-$$------------------*.##",
    r"#--##################--..#",
    r"####                ######",
  ],
];
