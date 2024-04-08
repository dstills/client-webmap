import{rl as o,d6 as O,g as t,y as a,eL as m,h6 as p,eN as T,i as C,eM as D,aP as U,cF as M,jF as k,rm as F}from"./index-nBWeBKPv.js";const E=o()({esriCentimeters:"centimeters",esriDecimalDegrees:"decimal-degrees",esriDecimeters:"decimeters",esriFeet:"feet",esriInches:"inches",esriKilometers:"kilometers",esriMeters:"meters",esriMiles:"miles",esriMillimeters:"millimeters",esriNauticalMiles:"nautical-miles",esriPoints:"points",esriUnknownUnits:"unknown",esriYards:"yards"}),L=o()({esriNAUCentimeters:"centimeters",esriNAUDecimalDegrees:"decimal-degrees",esriNAUDecimeters:"decimeters",esriNAUFeet:"feet",esriNAUInches:"inches",esriNAUKilometers:"kilometers",esriNAUMeters:"meters",esriNAUMiles:"miles",esriNAUMillimeters:"millimeters",esriNAUNauticalMiles:"nautical-miles",esriNAUPoints:"points",esriNAUYards:"yards"});o()({esriNAUDays:"days",esriNAUHours:"hours",esriNAUMinutes:"minutes",esriNAUSeconds:"seconds"});const J=o()({esriNAUCentimeters:"centimeters",esriNAUDecimalDegrees:"decimal-degrees",esriNAUDecimeters:"decimeters",esriNAUFeet:"feet",esriNAUInches:"inches",esriNAUKilometers:"kilometers",esriNAUMeters:"meters",esriNAUMiles:"miles",esriNAUMillimeters:"millimeters",esriNAUNauticalMiles:"nautical-miles",esriNAUPoints:"points",esriNAUYards:"yards",esriNAUDays:"days",esriNAUHours:"hours",esriNAUMinutes:"minutes",esriNAUSeconds:"seconds",esriNAUKilometersPerHour:"kilometers-per-hour",esriNAUMilesPerHour:"miles-per-hour",esriNAUUnknown:"unknown"}),V=o()({esriDOTComplete:"complete",esriDOTCompleteNoEvents:"complete-no-events",esriDOTFeatureSets:"featuresets",esriDOTInstructionsOnly:"instructions-only",esriDOTStandard:"standard",esriDOTSummaryOnly:"summary-only"}),K=o()({esriNAOutputLineNone:"none",esriNAOutputLineStraight:"straight",esriNAOutputLineTrueShape:"true-shape",esriNAOutputLineTrueShapeWithMeasure:"true-shape-with-measure"});o()({esriNAOutputPolygonNone:"none",esriNAOutputPolygonSimplified:"simplified",esriNAOutputPolygonDetailed:"detailed"});const W=o()({esriNFSBAllowBacktrack:"allow-backtrack",esriNFSBAtDeadEndsOnly:"at-dead-ends-only",esriNFSBNoBacktrack:"no-backtrack",esriNFSBAtDeadEndsAndIntersections:"at-dead-ends-and-intersections"});o()({esriNATravelDirectionFromFacility:"from-facility",esriNATravelDirectionToFacility:"to-facility"});o()({esriNATimeOfDayNotUsed:"not-used",esriNATimeOfDayUseAsStartTime:"start",esriNATimeOfDayUseAsEndTime:"end"});const x=o()({AUTOMOBILE:"automobile",TRUCK:"truck",WALK:"walk",OTHER:"other"}),u=o()({0:"either-side-of-vehicle",1:"right-side-of-vehicle",2:"left-side-of-vehicle",3:"no-u-turn"},{useNumericKeys:!0}),c=o()({0:"stop",1:"waypoint",2:"break"},{useNumericKeys:!0}),y=o()({0:"ok",1:"not-located",2:"network-element-not-located",3:"element-not-traversable",4:"invalid-field-values",5:"not-reached",6:"time-window-violation",7:"not-located-on-closest"},{useNumericKeys:!0}),A=o()({1:"right",2:"left"},{useNumericKeys:!0}),B=o()({0:"restriction",1:"scaled-cost",2:"added-cost"},{useNumericKeys:!0}),H=o()({0:"permit",1:"restrict"},{useNumericKeys:!0}),q=o()({1:"header",50:"arrive",51:"depart",52:"straight",100:"on-ferry",101:"off-ferry",102:"central-fork",103:"roundabout",104:"u-turn",150:"door",151:"stairs",152:"elevator",153:"escalator",154:"pedestrian-ramp",200:"left-fork",201:"left-ramp",202:"clockwise-roundabout",203:"left-handed-u-turn",204:"bear-left",205:"left-turn",206:"sharp-left",207:"left-turn-and-immediate-left-turn",208:"left-turn-and-immediate-right-turn",300:"right-fork",301:"right-ramp",302:"counter-clockwise-roundabout",303:"right-handed-u-turn",304:"bear-right",305:"right-turn",306:"sharp-right",307:"right-turn-and-immediate-left-turn",308:"right-turn-and-immediate-right-turn",400:"up-elevator",401:"up-escalator",402:"up-stairs",500:"down-elevator",501:"down-escalator",502:"down-stairs",1e3:"general-event",1001:"landmark",1002:"time-zone-change",1003:"traffic-event",1004:"scaled-cost-barrier-event",1005:"boundary-crossing",1006:"restriction-violation",1007:"lane"},{useNumericKeys:!0}),G=o()({0:"unknown",1:"segment",2:"maneuver-segment",3:"restriction-violation",4:"scaled-cost-barrier",5:"heavy-traffic",6:"slow-traffic",7:"moderate-traffic"},{useNumericKeys:!0}),_=o()({"NA Campus":"campus","NA Desktop":"desktop","NA Navigation":"navigation"}),j=o()({Kilometers:"kilometers",Miles:"miles",Meters:"meters"},{ignoreUnknown:!1}),R=o()({Minutes:"minutes",TimeAt1KPH:"time-at-1-kph",TravelTime:"travel-time",TruckMinutes:"truck-minutes",TruckTravelTime:"truck-travel-time",WalkTime:"walk-time"},{ignoreUnknown:!1}),b=o()({Kilometers:"kilometers",Miles:"miles",Meters:"meters",Minutes:"minutes",TimeAt1KPH:"time-at-1-kph",TravelTime:"travel-time",TruckMinutes:"truck-minutes",TruckTravelTime:"truck-travel-time",WalkTime:"walk-time"},{ignoreUnknown:!1}),g=o()({"Any Hazmat Prohibited":"any-hazmat-prohibited","Avoid Carpool Roads":"avoid-carpool-roads","Avoid Express Lanes":"avoid-express-lanes","Avoid Ferries":"avoid-ferries","Avoid Gates":"avoid-gates","Avoid Limited Access Roads":"avoid-limited-access-roads","Avoid Private Roads":"avoid-private-roads","Avoid Roads Unsuitable for Pedestrians":"avoid-roads-unsuitable-for-pedestrians","Avoid Stairways":"avoid-stairways","Avoid Toll Roads":"avoid-toll-roads","Avoid Toll Roads for Trucks":"avoid-toll-roads-for-trucks","Avoid Truck Restricted Roads":"avoid-truck-restricted-roads","Avoid Unpaved Roads":"avoid-unpaved-roads","Axle Count Restriction":"axle-count-restriction","Driving a Bus":"driving-a-bus","Driving a Taxi":"driving-a-taxi","Driving a Truck":"driving-a-truck","Driving an Automobile":"driving-an-automobile","Driving an Emergency Vehicle":"driving-an-emergency-vehicle","Height Restriction":"height-restriction","Kingpin to Rear Axle Length Restriction":"kingpin-to-rear-axle-length-restriction","Length Restriction":"length-restriction","Preferred for Pedestrians":"preferred-for-pedestrians","Riding a Motorcycle":"riding-a-motorcycle","Roads Under Construction Prohibited":"roads-under-construction-prohibited","Semi or Tractor with One or More Trailers Prohibited":"semi-or-tractor-with-one-or-more-trailers-prohibited","Single Axle Vehicles Prohibited":"single-axle-vehicles-prohibited","Tandem Axle Vehicles Prohibited":"tandem-axle-vehicles-prohibited","Through Traffic Prohibited":"through-traffic-prohibited","Truck with Trailers Restriction":"truck-with-trailers-restriction","Use Preferred Hazmat Routes":"use-preferred-hazmat-routes","Use Preferred Truck Routes":"use-preferred-truck-routes",Walking:"walking","Weight Restriction":"weight-restriction"},{ignoreUnknown:!1}),Y=o()({esriSpatialRelIntersects:"intersects",esriSpatialRelContains:"contains",esriSpatialRelCrosses:"crosses",esriSpatialRelEnvelopeIntersects:"envelope-intersects",esriSpatialRelIndexIntersects:"index-intersects",esriSpatialRelOverlaps:"overlaps",esriSpatialRelTouches:"touches",esriSpatialRelWithin:"within",esriSpatialRelRelation:"relation"}),z=o()({esriGeometryPoint:"point",esriGeometryPolyline:"polyline",esriGeometryPolygon:"polygon",esriGeometryEnvelope:"envelope",esriGeometryMultipoint:"multipoint"}),X=o()({esriNAUTCost:"cost",esriNAUTDescriptor:"descriptor",esriNAUTRestriction:"restriction",esriNAUTHierarchy:"hierarchy"}),Z=o()({esriDSTAltName:"alt-name",esriDSTArrive:"arrive",esriDSTBranch:"branch",esriDSTCrossStreet:"cross-street",esriDSTCumulativeLength:"cumulative-length",esriDSTDepart:"depart",esriDSTEstimatedArrivalTime:"estimated-arrival-time",esriDSTExit:"exit",esriDSTGeneral:"general",esriDSTLength:"length",esriDSTServiceTime:"service-time",esriDSTStreetName:"street-name",esriDSTSummary:"summary",esriDSTTime:"time",esriDSTTimeWindow:"time-window",esriDSTToward:"toward",esriDSTViolationTime:"violation-time",esriDSTWaitTime:"wait-time"});function h(e,i){if(e==null)return null;const s={},n=new RegExp(`^${i}`,"i");for(const d of Object.keys(e))if(n.test(d)){const v=d.substring(i.length);s[b.fromJSON(v)]=e[d]}return s}function I(e,i,s){if(e!=null){i.attributes||(i.attributes={});for(const n in e){const d=b.toJSON(n);i.attributes[`${s}${d}`]=e[n]}}}function S(e){const i={};for(const s of Object.keys(e)){const n=s;i[b.fromJSON(n)]=e[s]}return i}function N(e){const i={};for(const s of Object.keys(e)){const n=s;i[b.toJSON(n)]=e[s]}return i}function w(e,i){return e==null||i==null?null:Math.round((e-i)/6e4)}function Q(e){var n,d,v;const i=e.toJSON(),s=i;return s.accumulateAttributeNames&&(s.accumulateAttributeNames=(n=i.accumulateAttributeNames)==null?void 0:n.join()),s.attributeParameterValues&&(s.attributeParameterValues=JSON.stringify(i.attributeParameterValues)),s.barriers&&(s.barriers=JSON.stringify(i.barriers)),s.outSR&&(s.outSR=(d=i.outSR)==null?void 0:d.wkid),s.overrides&&(s.overrides=JSON.stringify(i.overrides)),s.polygonBarriers&&(s.polygonBarriers=JSON.stringify(i.polygonBarriers)),s.polylineBarriers&&(s.polylineBarriers=JSON.stringify(i.polylineBarriers)),s.restrictionAttributeNames&&(s.restrictionAttributeNames=(v=i.restrictionAttributeNames)==null?void 0:v.join()),s.stops&&(s.stops=JSON.stringify(i.stops)),s.travelMode&&(s.travelMode=JSON.stringify(i.travelMode)),s}let l=class extends O(D){constructor(e){super(e),this.attributeParameterValues=null,this.description=null,this.distanceAttributeName=null,this.id=null,this.impedanceAttributeName=null,this.name=null,this.restrictionAttributeNames=null,this.simplificationTolerance=null,this.simplificationToleranceUnits=null,this.timeAttributeName=null,this.type=null,this.useHierarchy=null,this.uturnAtJunctions=null}readId(e,i){return i.id??i.itemId??null}readRestrictionAttributes(e,i){const{restrictionAttributeNames:s}=i;return s==null?null:s.map(n=>g.fromJSON(n))}writeRestrictionAttributes(e,i,s){e!=null&&(i[s]=e.map(n=>g.toJSON(n)))}};t([a({type:[Object],json:{write:!0}})],l.prototype,"attributeParameterValues",void 0),t([a({type:String,json:{write:!0}})],l.prototype,"description",void 0),t([m(j,{ignoreUnknown:!1})],l.prototype,"distanceAttributeName",void 0),t([a({type:String,json:{write:!0}})],l.prototype,"id",void 0),t([p("id",["id","itemId"])],l.prototype,"readId",null),t([m(b,{ignoreUnknown:!1})],l.prototype,"impedanceAttributeName",void 0),t([a({type:String,json:{write:!0}})],l.prototype,"name",void 0),t([a({type:[String],json:{write:!0}})],l.prototype,"restrictionAttributeNames",void 0),t([p("restrictionAttributeNames")],l.prototype,"readRestrictionAttributes",null),t([T("restrictionAttributeNames")],l.prototype,"writeRestrictionAttributes",null),t([a({type:Number,json:{write:{allowNull:!0}}})],l.prototype,"simplificationTolerance",void 0),t([m(E)],l.prototype,"simplificationToleranceUnits",void 0),t([m(R,{ignoreUnknown:!1})],l.prototype,"timeAttributeName",void 0),t([m(x)],l.prototype,"type",void 0),t([a({type:Boolean,json:{write:!0}})],l.prototype,"useHierarchy",void 0),t([m(W)],l.prototype,"uturnAtJunctions",void 0),l=t([C("esri.rest.support.TravelMode")],l);const $=l;var f;let r=f=class extends O(D){constructor(e){super(e),this.arriveCurbApproach=null,this.arriveTime=null,this.arriveTimeOffset=null,this.bearing=null,this.bearingTol=null,this.cumulativeCosts=null,this.cumulativeDistance=null,this.cumulativeDuration=null,this.curbApproach=null,this.departCurbApproach=null,this.departTime=null,this.departTimeOffset=null,this.distanceToNetworkInMeters=null,this.geometry=null,this.lateDuration=null,this.locationType=null,this.name=null,this.navLatency=null,this.objectId=null,this.popupTemplate=null,this.posAlong=null,this.routeName=null,this.serviceCosts=null,this.serviceDistance=null,this.serviceDuration=null,this.sequence=null,this.sideOfEdge=null,this.snapX=null,this.snapY=null,this.snapZ=null,this.sourceId=null,this.sourceOid=null,this.status=null,this.symbol=null,this.timeWindowEnd=null,this.timeWindowEndOffset=null,this.timeWindowStart=null,this.timeWindowStartOffset=null,this.type="stop",this.violations=null,this.waitDuration=null,this.wait=null}readArriveTimeOffset(e,i){return w(i.attributes.ArriveTime,i.attributes.ArriveTimeUTC)}readCumulativeCosts(e,i){return h(i.attributes,"Cumul_")}readDepartTimeOffset(e,i){return w(i.attributes.DepartTime,i.attributes.DepartTimeUTC)}readServiceCosts(e,i){return h(i.attributes,"Attr_")}writeServiceCosts(e,i){I(e,i,"Attr_")}writeTimeWindowEnd(e,i){e!=null&&(i.attributes||(i.attributes={}),i.attributes.TimeWindowEnd=e.getTime())}writeTimeWindowStart(e,i){e!=null&&(i.attributes||(i.attributes={}),i.attributes.TimeWindowStart=e.getTime())}readViolations(e,i){return h(i.attributes,"Violation_")}readWait(e,i){return h(i.attributes,"Wait_")}static fromGraphic(e){return new f({arriveCurbApproach:e.attributes.ArrivalCurbApproach!=null?u.fromJSON(e.attributes.ArrivalCurbApproach):null,arriveTime:e.attributes.ArrivalTime!=null?new Date(e.attributes.ArrivalTime):null,arriveTimeOffset:e.attributes.ArrivalUTCOffset,cumulativeCosts:e.attributes.CumulativeCosts!=null?S(JSON.parse(e.attributes.CumulativeCosts)):null,cumulativeDistance:e.attributes.CumulativeMeters??null,cumulativeDuration:e.attributes.CumulativeMinutes??null,curbApproach:e.attributes.CurbApproach!=null?u.fromJSON(e.attributes.CurbApproach):null,departCurbApproach:e.attributes.DepartureCurbApproach!=null?u.fromJSON(e.attributes.DepartureCurbApproach):null,departTime:e.attributes.DepartureTime!=null?new Date(e.attributes.DepartureTime):null,departTimeOffset:e.attributes.DepartureUTCOffset??null,geometry:e.geometry,lateDuration:e.attributes.LateMinutes??null,locationType:e.attributes.LocationType!=null?c.fromJSON(e.attributes.LocationType):null,name:e.attributes.Name,objectId:e.attributes.ObjectID??e.attributes.__OBJECTID,popupTemplate:e.popupTemplate,routeName:e.attributes.RouteName,sequence:e.attributes.Sequence??null,serviceCosts:e.attributes.ServiceCosts!=null?S(JSON.parse(e.attributes.ServiceCosts)):null,serviceDistance:e.attributes.ServiceMeters??null,serviceDuration:e.attributes.ServiceMinutes??null,status:e.attributes.Status!=null?y.fromJSON(e.attributes.Status):null,symbol:e.symbol,timeWindowEnd:e.attributes.TimeWindowEnd!=null?new Date(e.attributes.TimeWindowEnd):null,timeWindowEndOffset:e.attributes.TimeWindowEndUTCOffset??null,timeWindowStart:e.attributes.TimeWindowStart!=null?new Date(e.attributes.TimeWindowStart):null,timeWindowStartOffset:e.attributes.TimeWindowStartUTCOffset??null,waitDuration:e.attributes.WaitMinutes??null})}toGraphic(){const e={ObjectID:this.objectId,ArrivalCurbApproach:this.arriveCurbApproach!=null?u.toJSON(this.arriveCurbApproach):null,ArrivalTime:this.arriveTime!=null?this.arriveTime.getTime():null,ArrivalUTCOffset:this.arriveTimeOffset,CumulativeCosts:this.cumulativeCosts!=null?JSON.stringify(N(this.cumulativeCosts)):null,CumulativeMeters:this.cumulativeDistance,CumulativeMinutes:this.cumulativeDuration,CurbApproach:this.curbApproach!=null?u.toJSON(this.curbApproach):null,DepartureCurbApproach:this.departCurbApproach!=null?u.toJSON(this.departCurbApproach):null,DepartureTime:this.departTime!=null?this.departTime.getTime():null,DepartureUTCOffset:this.departTimeOffset,LateMinutes:this.lateDuration,LocationType:this.locationType!=null?c.toJSON(this.locationType):null,Name:this.name,RouteName:this.routeName,Sequence:this.sequence,ServiceCosts:this.serviceCosts!=null?JSON.stringify(N(this.serviceCosts)):null,ServiceMeters:this.serviceDistance,ServiceMinutes:this.serviceDuration,Status:this.status!=null?y.toJSON(this.status):null,TimeWindowEnd:this.timeWindowEnd!=null?this.timeWindowEnd.getTime():null,TimeWindowEndUTCOffset:this.timeWindowEndOffset??this.arriveTimeOffset,TimeWindowStart:this.timeWindowStart!=null?this.timeWindowStart.getTime():null,TimeWindowStartUTCOffset:this.timeWindowStartOffset??this.arriveTimeOffset,WaitMinutes:this.waitDuration};return new U({geometry:this.geometry,attributes:e,symbol:this.symbol,popupTemplate:this.popupTemplate})}};r.fields=[{name:"ObjectID",alias:"ObjectID",type:"esriFieldTypeOID",editable:!1,nullable:!1,domain:null},{name:"ArrivalCurbApproach",alias:"Arrival Curb Approach",type:"esriFieldTypeInteger",editable:!0,nullable:!0,visible:!0,domain:{type:"codedValue",name:"esriNACurbApproachType",codedValues:[{name:"Either side",code:0},{name:"From the right",code:1},{name:"From the left",code:2},{name:"Depart in the same direction",code:3}]}},{name:"ArrivalTime",alias:"Arrival Time",type:"esriFieldTypeDate",length:36,editable:!0,nullable:!0,visible:!0},{name:"ArrivalUTCOffset",alias:"Arrival Time: Offset from UTC in Minutes",type:"esriFieldTypeInteger",editable:!0,nullable:!0,visible:!0},{name:"CumulativeCosts",alias:"Cumulative Costs",type:"esriFieldTypeString",length:1048576,editable:!0,nullable:!0,visible:!1,domain:null},{name:"CumulativeMeters",alias:"Cumulative Meters",type:"esriFieldTypeDouble",editable:!0,nullable:!0,visible:!0},{name:"CumulativeMinutes",alias:"Cumulative Minutes",type:"esriFieldTypeDouble",editable:!0,nullable:!0,visible:!0},{name:"CurbApproach",alias:"Curb Approach",type:"esriFieldTypeInteger",editable:!0,nullable:!0,visible:!1,domain:{type:"codedValue",name:"esriNACurbApproachType",codedValues:[{name:"Either side",code:0},{name:"From the right",code:1},{name:"From the left",code:2},{name:"Depart in the same direction",code:3}]}},{name:"DepartureCurbApproach",alias:"Departure Curb Approach",type:"esriFieldTypeInteger",editable:!0,nullable:!0,visible:!0,domain:{type:"codedValue",name:"esriNACurbApproachType",codedValues:[{name:"Either side",code:0},{name:"From the right",code:1},{name:"From the left",code:2},{name:"Depart in the same direction",code:3}]}},{name:"DepartureTime",alias:"Departure Time",type:"esriFieldTypeDate",length:36,editable:!0,nullable:!0,visible:!0},{name:"DepartureUTCOffset",alias:"Departure Time: Offset from UTC in Minutes",type:"esriFieldTypeInteger",editable:!0,nullable:!0,visible:!0},{name:"LateMinutes",alias:"Minutes Late",type:"esriFieldTypeDouble",editable:!0,nullable:!0,visible:!1},{name:"LocationType",alias:"Location Type",type:"esriFieldTypeInteger",editable:!0,nullable:!0,visible:!0,domain:{type:"codedValue",name:"esriNALocationType",codedValues:[{name:"Stop",code:0},{name:"Waypoint",code:1}]}},{name:"Name",alias:"Name",type:"esriFieldTypeString",length:255,editable:!0,nullable:!0,visible:!0},{name:"RouteName",alias:"Route Name",type:"esriFieldTypeString",length:255,editable:!0,nullable:!0,visible:!0},{name:"Sequence",alias:"Sequence",type:"esriFieldTypeInteger",editable:!0,nullable:!0,visible:!0},{name:"ServiceCosts",alias:"Service Costs",type:"esriFieldTypeString",length:1048576,editable:!0,nullable:!0,visible:!1,domain:null},{name:"ServiceMeters",alias:"Service Meters",type:"esriFieldTypeDouble",editable:!0,nullable:!0,visible:!1},{name:"ServiceMinutes",alias:"Service Minutes",type:"esriFieldTypeDouble",editable:!0,nullable:!0,visible:!1},{name:"Status",alias:"Status",type:"esriFieldTypeInteger",editable:!0,nullable:!0,visible:!0,domain:{type:"codedValue",name:"esriNAObjectStatus",codedValues:[{name:"OK",code:0},{name:"Not Located on Network",code:1},{name:"Network Unbuilt",code:2},{name:"Prohibited Street",code:3},{name:"Invalid Field Values",code:4},{name:"Cannot Reach",code:5},{name:"Time Window Violation",code:6}]}},{name:"TimeWindowEnd",alias:"Time Window End",type:"esriFieldTypeDate",length:36,editable:!0,nullable:!0,visible:!1},{name:"TimeWindowEndUTCOffset",alias:"Time Window End: Offset from UTC in Minutes",type:"esriFieldTypeInteger",editable:!0,nullable:!0,visible:!0},{name:"TimeWindowStart",alias:"Time Window Start",type:"esriFieldTypeDate",length:36,editable:!0,nullable:!0,visible:!1},{name:"TimeWindowStartUTCOffset",alias:"Time Window Start: Offset from UTC in Minutes",type:"esriFieldTypeInteger",editable:!0,nullable:!0,visible:!0},{name:"WaitMinutes",alias:"Minutes Early",type:"esriFieldTypeDouble",editable:!0,nullable:!0,visible:!1}],r.popupInfo={title:"{Name}",fieldInfos:[{fieldName:"Name",label:"Name",isEditable:!0,tooltip:"",visible:!0,stringFieldOption:"textbox"},{fieldName:"RouteName",label:"Route Name",isEditable:!0,tooltip:"",visible:!0,stringFieldOption:"textbox"},{fieldName:"Sequence",label:"Sequence",isEditable:!1,tooltip:"",visible:!0,format:{places:0,digitSeparator:!0},stringFieldOption:"textbox"},{fieldName:"ArrivalTime",label:"Arrival Time",isEditable:!0,tooltip:"",visible:!0,format:{dateFormat:"shortDateShortTime24"},stringFieldOption:"textbox"},{fieldName:"ArrivalUTCOffset",label:"Arrival Time: Offset from UTC in Minutes",isEditable:!1,tooltip:"",visible:!0,format:{places:0,digitSeparator:!0},stringFieldOption:"textbox"},{fieldName:"DepartureTime",label:"Departure Time",isEditable:!0,tooltip:"",visible:!0,format:{dateFormat:"shortDateShortTime24"},stringFieldOption:"textbox"},{fieldName:"DepartureUTCOffset",label:"Departure Time: Offset from UTC in Minutes",isEditable:!1,tooltip:"",visible:!0,format:{places:0,digitSeparator:!0},stringFieldOption:"textbox"},{fieldName:"CurbApproach",label:"Curb Approach",isEditable:!0,tooltip:"",visible:!1,format:{places:0,digitSeparator:!0},stringFieldOption:"textbox"},{fieldName:"ArrivalCurbApproach",label:"Arrival Curb Approach",isEditable:!1,tooltip:"",visible:!0,format:{places:0,digitSeparator:!0},stringFieldOption:"textbox"},{fieldName:"DepartureCurbApproach",label:"Departure Curb Approach",isEditable:!1,tooltip:"",visible:!0,format:{places:0,digitSeparator:!0},stringFieldOption:"textbox"},{fieldName:"Status",label:"Status",isEditable:!1,tooltip:"",visible:!0,format:{places:0,digitSeparator:!0},stringFieldOption:"textbox"},{fieldName:"LocationType",label:"Location Type",isEditable:!1,tooltip:"",visible:!0,format:{places:0,digitSeparator:!0},stringFieldOption:"textbox"},{fieldName:"TimeWindowStart",label:"Time Window Start",isEditable:!0,tooltip:"",visible:!1,format:{dateFormat:"shortDateShortTime24"},stringFieldOption:"textbox"},{fieldName:"TimeWindowStartUTCOffset",label:"Time Window Start: Offset from UTC in Minutes",isEditable:!1,tooltip:"",visible:!1,format:{places:0,digitSeparator:!0},stringFieldOption:"textbox"},{fieldName:"TimeWindowEnd",label:"Time Window End",isEditable:!0,tooltip:"",visible:!1,format:{dateFormat:"shortDateShortTime24"},stringFieldOption:"textbox"},{fieldName:"TimeWindowEndUTCOffset",label:"Time Window End: Offset from UTC in Minutes",isEditable:!1,tooltip:"",visible:!1,format:{places:0,digitSeparator:!0},stringFieldOption:"textbox"},{fieldName:"ServiceMinutes",label:"Service Minutes",isEditable:!0,tooltip:"",visible:!1,format:{places:2,digitSeparator:!0},stringFieldOption:"textbox"},{fieldName:"ServiceMeters",label:"Service Meters",isEditable:!0,tooltip:"",visible:!1,format:{places:2,digitSeparator:!0},stringFieldOption:"textbox"},{fieldName:"ServiceCosts",label:"Service Costs",isEditable:!0,tooltip:"",visible:!1,stringFieldOption:"textbox"},{fieldName:"CumulativeMinutes",label:"Cumulative Minutes",isEditable:!1,tooltip:"",visible:!0,format:{places:2,digitSeparator:!0},stringFieldOption:"textbox"},{fieldName:"CumulativeMeters",label:"Cumulative Meters",isEditable:!1,tooltip:"",visible:!0,format:{places:2,digitSeparator:!0},stringFieldOption:"textbox"},{fieldName:"CumulativeCosts",label:"Cumulative Costs",isEditable:!0,tooltip:"",visible:!1,stringFieldOption:"textbox"},{fieldName:"LateMinutes",label:"Minutes Late",isEditable:!1,tooltip:"",visible:!1,format:{places:2,digitSeparator:!0},stringFieldOption:"textbox"},{fieldName:"WaitMinutes",label:"Minutes Early",isEditable:!1,tooltip:"",visible:!1,format:{places:2,digitSeparator:!0},stringFieldOption:"textbox"}],description:null,showAttachments:!1,mediaInfos:[]},t([a({type:u.apiValues,json:{read:{source:"attributes.ArrivalCurbApproach",reader:u.read}}})],r.prototype,"arriveCurbApproach",void 0),t([a({type:Date,json:{read:{source:"attributes.ArriveTimeUTC"}}})],r.prototype,"arriveTime",void 0),t([a()],r.prototype,"arriveTimeOffset",void 0),t([p("arriveTimeOffset",["attributes.ArriveTime","attributes.ArriveTimeUTC"])],r.prototype,"readArriveTimeOffset",null),t([a({json:{name:"attributes.Bearing",read:!1,write:!0}})],r.prototype,"bearing",void 0),t([a({json:{name:"attributes.BearingTol",read:!1,write:!0}})],r.prototype,"bearingTol",void 0),t([a()],r.prototype,"cumulativeCosts",void 0),t([p("cumulativeCosts",["attributes"])],r.prototype,"readCumulativeCosts",null),t([a()],r.prototype,"cumulativeDistance",void 0),t([a()],r.prototype,"cumulativeDuration",void 0),t([a({type:u.apiValues,json:{name:"attributes.CurbApproach",read:{reader:u.read},write:{writer:u.write}}})],r.prototype,"curbApproach",void 0),t([a({type:u.apiValues,json:{read:{source:"attributes.DepartCurbApproach",reader:u.read}}})],r.prototype,"departCurbApproach",void 0),t([a({type:Date,json:{read:{source:"attributes.DepartTimeUTC"}}})],r.prototype,"departTime",void 0),t([a()],r.prototype,"departTimeOffset",void 0),t([p("departTimeOffset",["attributes.DepartTime","attributes.DepartTimeUTC"])],r.prototype,"readDepartTimeOffset",null),t([a({json:{read:{source:"attributes.DistanceToNetworkInMeters"}}})],r.prototype,"distanceToNetworkInMeters",void 0),t([a({type:M,json:{write:!0}})],r.prototype,"geometry",void 0),t([a()],r.prototype,"lateDuration",void 0),t([a({type:c.apiValues,json:{name:"attributes.LocationType",read:{reader:c.read},write:{writer:c.write}}})],r.prototype,"locationType",void 0),t([a({json:{name:"attributes.Name"}})],r.prototype,"name",void 0),t([a({json:{name:"attributes.NavLatency",read:!1,write:!0}})],r.prototype,"navLatency",void 0),t([a({json:{name:"attributes.ObjectID"}})],r.prototype,"objectId",void 0),t([a({type:k})],r.prototype,"popupTemplate",void 0),t([a({json:{read:{source:"attributes.PosAlong"}}})],r.prototype,"posAlong",void 0),t([a({json:{name:"attributes.RouteName"}})],r.prototype,"routeName",void 0),t([a()],r.prototype,"serviceCosts",void 0),t([p("serviceCosts",["attributes"])],r.prototype,"readServiceCosts",null),t([T("serviceCosts")],r.prototype,"writeServiceCosts",null),t([a()],r.prototype,"serviceDistance",void 0),t([a()],r.prototype,"serviceDuration",void 0),t([a({json:{name:"attributes.Sequence"}})],r.prototype,"sequence",void 0),t([a({type:A.apiValues,json:{read:{source:"attributes.SideOfEdge",reader:A.read}}})],r.prototype,"sideOfEdge",void 0),t([a({json:{read:{source:"attributes.SnapX"}}})],r.prototype,"snapX",void 0),t([a({json:{read:{source:"attributes.SnapY"}}})],r.prototype,"snapY",void 0),t([a({json:{read:{source:"attributes.SnapZ"}}})],r.prototype,"snapZ",void 0),t([a({json:{read:{source:"attributes.SourceID"}}})],r.prototype,"sourceId",void 0),t([a({json:{read:{source:"attributes.SourceOID"}}})],r.prototype,"sourceOid",void 0),t([a({type:y.apiValues,json:{read:{source:"attributes.Status",reader:y.read}}})],r.prototype,"status",void 0),t([a({types:F})],r.prototype,"symbol",void 0),t([a({type:Date,json:{name:"attributes.TimeWindowEnd"}})],r.prototype,"timeWindowEnd",void 0),t([T("timeWindowEnd")],r.prototype,"writeTimeWindowEnd",null),t([a()],r.prototype,"timeWindowEndOffset",void 0),t([a({type:Date,json:{name:"attributes.TimeWindowStart"}})],r.prototype,"timeWindowStart",void 0),t([T("timeWindowStart")],r.prototype,"writeTimeWindowStart",null),t([a()],r.prototype,"timeWindowStartOffset",void 0),t([a({readOnly:!0,json:{read:!1}})],r.prototype,"type",void 0),t([a()],r.prototype,"violations",void 0),t([p("violations",["attributes"])],r.prototype,"readViolations",null),t([a()],r.prototype,"waitDuration",void 0),t([a()],r.prototype,"wait",void 0),t([p("wait",["attributes"])],r.prototype,"readWait",null),r=f=t([C("esri.rest.support.Stop")],r);const ee=r;export{B as A,g as D,q as N,ee as O,X as R,Y as S,H as T,b as U,J as a,L as b,V as c,E as d,S as e,Z as f,G as g,Q as h,I as i,$ as j,_ as k,W as l,w as n,K as o,y as p,h as r,N as s,u,A as v,z as w,R as y};
