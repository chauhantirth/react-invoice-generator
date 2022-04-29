const itemList=[
    {value:"CAM FOLLOWER PIN-ROLL (815060)", label:"CAM FOLLOWER PIN-ROLL (815060)", price:'53.00'},
    {value:"HOOK ROAD (817043)", label:"HOOK ROAD (817043)", price:'10.40'},
    {value:"SPACER FOR HOOK ROLLER (822021-01)", label:"SPACER FOR HOOK ROLLER (822021-01)", price:'1.70'},
    {value:"JOINT COLLER (822034)", label:"JOINT COLLER (822034)", price:'15.00'},
    {value:"PIN FOR LINK (822035)", label:"PIN FOR LINK (822035)", price:'11.00'},
    {value:"DROPPER ROD BUSH (822055-01)", label:"DROPPER ROD BUSH (822055-01)", price:'9.25'},
    {value:"DROPPER ROD STOPPER (822056)(825120)", label:"DROPPER ROD STOPPER (822056)(825120)", price:'2.60'},
    {value:"DROPPER WEIGHT (822060)", label:"DROPPER WEIGHT (822060)", price:'7.75'},
    {value:"DROPPER BUSH-W/O (822065)", label:"PIN FOR LINK-IND 822035 (822065)", price:'9.25'},
    {value:"PIN FOR SIN BAR (822526)", label:"PIN FOR SIN BAR (822526)", price:'11.50'},
    {value:"GUIDE ROD (824062)", label:"GUIDE ROD (824062)", price:'15.00'},
    {value:`COUPLING Ø 1/2" (824063)(851222)`, label:`COUPLING Ø 1/2" (824063)(851222)`, price:'15.00'},
    {value:"SHOE GUIDE PATTI (824064)", label:"SHOE GUIDE PATTI (824064)", price:'4.00'},
    {value:"SHOE GUIDE PATTI WASHER (824065)", label:"SHOE GUIDE PATTI WASHER (824065)", price:'1.75'},
    {value:"CREEL STUD - 8 X 140 MM (824112)", label:"CREEL STUD - 8 X 140 MM (824112)", price:'10.50'},
    {value:"DROPPER LEAVER (824174)", label:"DROPPER LEAVER (824174)", price:'68.40'},
    {value:"COUPLING SPRING STEEL-Ø20 (824175)", label:"COUPLING SPRING STEEL-Ø20 (824175)", price:'20.75'},
    {value:"BELT TENSION SCREW WITH NUT (824199)", label:"BELT TENSION SCREW WITH NUT (824199)", price:'385.00'},
    {value:"SUPPORT ROD - W/A (825031)", label:"SUPPORT ROD - W/A (825031)", price:'28.20'},
    {value:"HOOK PLATE (827009)", label:"HOOK PLATE (827009)", price:'9.00'},
    {value:"BEARING BRACKET (827032-01)", label:"BEARING BRACKET (827032-01)", price:'9.50'},
    {value:"DROPPER ROD BUSH 18MM L(827039-01)", label:"DROPPER ROD BUSH 18MM L(827039-01)", price:'11.00'},
    {value:"HOOK ROD(827041)", label:"HOOK ROD(827041)", price:"3.75"},
    {value:"DROPPER ROD 190x100x4MM (827043)", label:"DROPPER ROD 190x100x4MM (827043)", price:"11.40"},
    {value:"DROPPER ROD 190x100x50x4MM (827044)", label:"DROPPER ROD 190x100x50x4MM (827044)",price:"12.60"},
    {value:"HOOK ROLLER NUT (827837)",label:"HOOK ROLLER NUT (827837)",price:"3.60"},
    {value:"DROPPER ROD-Ø4 X 60x230 (827876-01)",label:"DROPPER ROD-Ø4 X 60x230 (827876-01)",price:"8.00"},
    {value:"DROPPER WEIGHT-4MM HOLE (827900)",label:"DROPPER WEIGHT-4MM HOLE (827900)",price:"6.75"},
    {value:"GUIDE PLATE (828030-01)",label:"GUIDE PLATE (828030-01)",price:"4.60"},
    {value:"BELT TENSION SCREW WITH HEX NUT (833010)",label:"BELT TENSION SCREW WITH HEX NUT (833010)",price:"260.00"},
    {value:"SPACER FOR BEARING (833035)",label:"SPACER FOR BEARING (833035)",price:"9.20"},
    {value:"ROLLER SUPPORT ROD Ø6 X 80MM (833050)",label:"ROLLER SUPPORT ROD Ø6 X 80 (833050MM)",price:"4.10"},
    {value:"HOOK FOR HOOK HOLDER (833073)",label:"HOOK FOR HOOK HOLDER (833073)",price:"8.85"},
    {value:"RUBBER ROLLER LIFTING PIN (833092-02)",label:"RUBBER ROLLER LIFTING PIN (833092-02)",price:"86.25"},
    {value:"RUBBER ROLLER LIFTING LEAVER (833093)",label:"RUBBER ROLLER LIFTING LEAVER (833093)",price:"86.25"},
    {value:"STUD FOR SPLITER (833094)",label:"STUD FOR SPLITER (833094)",price:"31.20"},
    {value:"SPRING GURD TOP (833096)",label:"SPRING GURD TOP (833096)",price:"38.50"},
    {value:"SPRING GUARD BOTTOM (833097)",label:"SPRING GUARD BOTTOM (833097)",price:"36.25"},
    {value:"SPRING LOCATOR TOP (833098)",label:"SPRING LOCATOR TOP (833098)",price:"23.60"},
    {value:"SPRING LOCATOR BOTTOM (833099)",label:"SPRING LOCATOR BOTTOM (833099)",price:"23.60"},
    {value:"ROLLER SUPPORT ROD LYCRA Ø6 X205MM (833704)",label:"ROLLER SUPPORT ROD LYCRA Ø6 X205MM (833704)",price:"7.30"},
    {value:"MANDRILL BUSH-BIG (833817)",label:"MANDRILL BUSH-BIG (833817)",price:"14.75"},
    {value:"MANDRILL BUSH-SMALL (833818)",label:"MANDRILL BUSH-SMALL (833818)",price:"14.75"},
    {value:"BOLT FOR BEAM SPRING (833923)",label:"BOLT FOR BEAM SPRING (833923)",price:"9.50"},
    {value:"HOOK-75MM L(833929)",label:"HOOK-75MM L(833929)",price:"4.60"},
    {value:"HOOK BOLT (833930)",label:"HOOK BOLT (833930)",price:"4.90"},
    {value:"HOOKE Ø6 X 55L (837514)",label:"HOOKE Ø6 X 55L (837514)",price:"4.15"},
    {value:"DISTANCE COLLAR -ASSLY WINDER (841627)",label:"DISTANCE COLLAR -ASSLY WINDER (841627)",price:"5.20"},
    {value:"HOOK WIRE - Ø 350MM PKG (841732)",label:"HOOK WIRE - Ø 350MM PKG (841732)",price:"4.50"},
    {value:"HOOK ROD -WINDING (844056)",label:"HOOK ROD -WINDING (844056)",price:"7.00"},
    {value:"HOOK BOLT(M8x20MM) (844216)",label:"HOOK BOLT(M8x20MM) (844216)",price:"4.30"},
    {value:"SHOE GUIDE PATTI FOR CUT EYELET (852028-01)",label:"SHOE GUIDE PATTI FOR CUT EYELET (852028-01)",price:"4.30"},
    {value:"HOOK ROD -230 MM (863042)",label:"HOOK ROD -230 MM (863042)",price:"8.60"},
    {value:"HOOK BOLT WITH NUT-M10X20 (863043)",label:"HOOK BOLT WITH NUT-M10X20 (863043)",price:"6.30"},
    {value:`Ø3/4" HOLE COUPLING (8A15045)`,label:`Ø3/4" HOLE COUPLING (8A15045)`,price:"24.25"},
    {value:"STAR BREAK(8A15111)(815579)",label:"STAR BREAK(8A15111)(815579)",price:"14.50"},
    {value:"HOOK BKT(UP TWISTER) (8B15238)",label:"HOOK BKT(UP TWISTER) (8B15238)",price:"8.50"},
    {value:"PULLER ASSLY SET (933009)",label:"PULLER ASSLY SET (933009)",price:"2100.00"},
    {value:"DISTANCE PIECE-10MM (DISP-10MM)",label:"DISTANCE PIECE-10MM (DISP-10MM)",price:"7.00"},
    {value:"STATIONARY POT PULLER (BIG) (G-006)",label:"STATIONARY POT PULLER (BIG) (G-006)",price:"115.00"},
    {value:"BEARING PULLER (607 & 608) (G-016)",label:"BEARING PULLER (607 & 608) (G-016)",price:"260.00"},
    {value:"BEARING PULLER (6203 & 6002) (G-058)",label:"BEARING PULLER (6203 & 6002) (G-058)",price:"518.00"},
    {value:"BEARNING PULLER-6000-6001 (G005)",label:"BEARNING PULLER-6000-6001 (G005)",price:"300.00"},
    {value:"BEARING LUG-6001 (G003)",label:"BEARING LUG-6001 (G003)",price:"90.00"},
    {value:"BEARING LUG-6000 (G004)",label:"BEARING LUG-6000 (G004)",price:"90.00"},
    {value:"BEARING LUG-607/608 (G015)",label:"BEARING LUG-607/608 (G015)",price:"90.00"},
    {value:"LOCK PATTI (LOCKPATTI)",label:"LOCK PATTI (LOCKPATTI)",price:"1.50"},
    {value:"STATIONRY POT PULER (G-006)",label:"STATIONRY POT PULER (G-006)",price:"115.00"},
    {value:"BRAKE ROD Ø8 X325MM (821036)",label:"BRAKE ROD Ø8 X325MM (821036)",price:"21.50"},
    {value:"PUSH ROD 380MM LENGTH (824036-01)",label:"PUSH ROD 380MM LENGTH (824036-01)",price:"19.20"},
    {value:"SENSOR COLLAR (824077)",label:"SENSOR COLLAR (824077)",price:"19.00"},
    {value:"PUSH ROD 460MM L (826410)",label:"PUSH ROD 460MM L (826410)",price:"22.80"},
    {value:"BRAKE ROD -430MM L(826412-01)",label:"BRAKE ROD -430MM L(826412-01)",price:"25.20"},
    {value:"DROPPER ROD -190x100x4MM (827042)",label:"DROPPER ROD -190x100x4MM (827042)",price:"11.40"},
    {value:"BOLT FOR BEAM SPRING (833923)",label:"BOLT FOR BEAM SPRING (833923)",price:"5.00"},
    {value:"HOOK (RC) (835057)",label:"HOOK (RC) (835057)",price:"5.20"},
    {value:"TRAVERSE PIPE BKT.(LABOUR) (835019-01)",label:"TRAVERSE PIPE BKT.(LABOUR) (835019-01)",price:"6.60"},
    {value:"HOOK WIRE-ASSLY WINDER WITHOUT PLATTING(837020)",label:"HOOK WIRE-ASSLY WINDER WITHOUT PLATTING(837020)",price:"6.00"},
    {value:"GUIDE WIRE-ASSLY WINDER (841631)",label:"GUIDE WIRE-ASSLY WINDER (841631)",price:"4.60"},
    {value:"PUSH ROD-SD (858028)",label:"PUSH ROD-SD (858028)",price:"19.50"},
    {value:"HOLDER PIN 113MM L(836068)",label:"HOLDER PIN 113MM L(836068)",price:"6.00"},
    {value:"HOLDER PIN 112MM",label:"HOLDER PIN 112MM",price:"5.00"},
    {value:"CRADLLE BRACKET PIN (824162)",label:"CRADLLE BRACKET PIN (824162)",price:"15.50"},
    {value:"DROPPER WEIGHT-4MM HOLE (827900)",label:"DROPPER WEIGHT-4MM HOLE (827900)",price:"7.75"},
    {value:"SPACER FOR GARGADI (820212)",label:"SPACER FOR GARGADI (820212)",price:"7.00"},
    {value:"BEARING SPACER (DP-201610)",label:"BEARING SPACER (DP-201610)",price:"6.30"},
    {value:"HOOK BOLT (841636-01)",label:"HOOK BOLT (841636-01)",price:"8.00"},
    {value:"HOOK WIREN D4 (841851)",label:"HOOK WIREN D4 (841851)",price:"5.00"},
    {value:"BEARING LUG (G-053)",label:"BEARING LUG (G-053)",price:"103.00"},
    {value:"BEARING LUG (G-054-01)",label:"BEARING LUG (G-054-01)",price:"103.00"},
    {value:"65MM ALLU. PRESSURE PULLEY PIN WITH ECENTRIC NUT (8B24185-92)",label:"65MM ALLU. PRESS0URE PULLEY PIN WITH ECENTRIC NUT (8B24185-92)",price:"145.00"},
    {value:"BEARING LUG (607 & 608)(G-015)",label:"BEARING LUG (607 & 608)(G-015)",price:"103.00"},
    {value:"BEARING PULLER-6000-6001(G-005)",label:"BEARING PULLER-6000-6001(G-005)",price:"345.00"},
    {value:"BEARING LUG-6000(G-004)",label:"BEARING LUG-6000(G-004)",price:"103.00"},
    {value:"BEARING LUG-6001(G-003)",label:"BEARING LUG-6001(G-003)",price:"103.00"},
    {value:"COUPLING 22IDx40MM L(8B15164)",label:"COUPLING 22IDx40MM L(8B15164)",price:"27.00"},
    {value:"PATTI(8E24035)",label:"PATTI(8E24035)",price:"4.25"},
    {value:"L PATTI BEARING PIN(6000/6001)(815047-48)",label:"L PATTI BEARING PIN(6000/6001)(815047-48)",price:"25.50"},
    {value:"CAM FOLLOWER PIN ROLLER(815060)",label:"CAM FOLLOWER PIN ROLLER(815060)",price:"90.00"},
    {value:"HOOK ROD 90MM L(815631)",label:"HOOK ROD 90MM L(815631)",price:"7.75"},
    {value:"BEARING SPACER(816744)",label:"BEARING SPACER(816744)",price:"5.20"},
    {value:"SUPPORT ROD(819213)",label:"SUPPORT ROD(819213)",price:"41.00"},
    {value:"COLLAR (Ø25 x Ø8.5 x 31L)(LABOUR)(819517)",label:"COLLAR (Ø25 x Ø8.5 x 31L)(LABOUR)(819517)",price:"4.50"},
    {value:"HOOK ROD PIN(820484)",label:"HOOK ROD PIN(820484)",price:"18.40"},
    {value:"DROPPER ROD(820975)",label:"DROPPER ROD(820975)",price:"14.50"},
    {value:"HOOK ROD SPUN TFO (824040)",label:"HOOK ROD SPUN TFO (824040)",price:"7.00"},
    {value:`CRADLE STOPER (824051)`, label:`CRADLE STOPER (824051)`, price:'13.25'},
    {value:`SUPPORT ROD COLLAR (824057)`, label:`SUPPORT ROD COLLAR (824057)`, price:'20.75'},
    {value:"SUPPORT ROD 180MM L (824058-01)",label:"SUPPORT ROD 180MM L (824058-01)",price:"30.50"},
    {value:"25Ø SLIDING SHAFT SPACER (LABOUR) (824512-02)",label:"25Ø SLIDING SHAFT SPACER (LABOUR) (824512-02)",price:"8.00"},
    {value:"HOOK ROD (827010)",label:"HOOK ROD (827010)",price:"3.00"},
    {value:"BEARING SPACER (833024)",label:"BEARING SPACER (833024)",price:"7.20"},
    {value:"SPACING COLLAR (833149)",label:"SPACING COLLAR (833149)",price:"7.00"},
    {value:"HOOK ROD (833362)",label:"HOOK ROD (833362)",price:"7.00"},
    {value:"BEAM LOCK COLLAR (833949)",label:"BEAM LOCK COLLAR (833949)",price:"13.80"},
    {value:"REDUCTION BOX SPACER (833964-01)",label:"REDUCTION BOX SPACER (833964-01)",price:"7.50"},
    {value:"LYCRA ROD 170MM L(835066)",label:"LYCRA ROD 170MM L(835066)",price:"6.90"},
    {value:"PIN FOR SPROCKET (LABOUR) (835067)",label:"PIN FOR SPROCKET (LABOUR) (835067)",price:"8.00"},
    {value:"COLLAR (Ø25 X Ø14.5 X 18L)(LABOUR) (835924)",label:"COLLAR (Ø25 X Ø14.5 X 18L)(LABOUR) (835924)",price:"3.45"},
    {value:"COLLAR (12 X 16 X 5.5) (835115)",label:"COLLAR (12 X 16 X 5.5) (835115)",price:"5.20"},
    {value:"SPACER (836322)",label:"SPACER (836322)",price:"6.30"},
    {value:"ROD FOR ROLLER (836429)",label:"ROD FOR ROLLER (836429)",price:"11.20"},
    {value:"SUPPORT STUD (836462)",label:"SUPPORT STUD (836462)",price:"7.00"},
    {value:"DISTANCE COLLAR(836695)",label:"DISTANCE COLLAR(836695)",price:"7.00"},
    {value:"BEARING PIN WITH SPACER (837017)",label:"BEARING PIN WITH SPACER (837017)",price:"11.00"},
    {value:"HOOK WIRE ASSLY WINDER(841537)",label:"HOOK WIRE ASSLY WINDER(841537)",price:"8.00"},
    {value:"COLLAR (841564)",label:"COLLAR (841564)",price:"5.00"},
    {value:"HOOK WIRE (841746)",label:"HOOK WIRE (841746)",price:"9.20"},
    {value:"HOOK ROD (843035)",label:"HOOK ROD (843035)",price:"7.00"},
    {value:"TESNIONER MTG BKT BUSH (LABOUR)(844207)",label:"TESNIONER MTG BKT BUSH (LABOUR)(844207)",price:"7.50"},
    {value:"PUSH ROD 535MM (858028-02)",label:"PUSH ROD 535MM (858028-02)",price:"23.40"},
    {value:"SPACER (860048)",label:"SPACER (860048)",price:"3.00"},
    {value:"HOOK ROD FOR GUIDE (863135-01)",label:"HOOK ROD FOR GUIDE (863135-01)",price:"6.30"},
    {value:"PIN FOR HOOK ROD (863215)",label:"PIN FOR HOOK ROD (863215)",price:"12.10"},
    {value:"DISTANCE COLLAR (865143)",label:"DISTANCE COLLAR (865143)",price:"4.00"},
    {value:"PIN FOR LINK (820616)", label:"PIN FOR LINK (820616)", price:'11.00'},
    {value:"DIST PIECE(835033)", label:"DIST PIECE(835033)", price:'3.70'},
    {value:"BELT TENSION SCREW (844071)", label:"BELT TENSION SCREW (844071)", price:'126.50'},
    {value:"PUSH ROD 8Øx360MM L (821712)", label:"PUSH ROD 8Øx360MM L (821712)", price:'21.50'},
    {value:"ITEM", label:"ITEM", price:'0.00'},
    {value:"ITEM", label:"ITEM", price:'0.00'},
]

export default itemList;
