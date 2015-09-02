//
//  StatusCheckerDelegate.h
//  BackbaseCXP
//
//  Created by Backbase R&D B.V. on 18/06/15.
//

#import <Foundation/Foundation.h>

@protocol StatusCheckerDelegate <NSObject>
@required
/**
 * Is called when the status checker has retrieved the new model status.
 * @param data A dictionary with the format:
 * <ol>
 * <li> "status": ""</li>
 * <li> "updateLink": ""</li>
 * </ol>
 * Status can be OK, DEPRECATED, OBSOLETE or UNAVAILABLE.
 */
- (void)statusCheckDidSucceedWithData:(NSDictionary *)data;
/**
 * Is called when the status checker has failed to retrieve the new model status.
 * @param error If an error occurs, an NSError object that describes the problem.
 */
- (void)statusCheckDidFailWithError:(NSError *)error;
@end
