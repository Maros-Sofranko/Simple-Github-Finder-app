import React from 'react';
import PropTypes from 'prop-types';
import RepoItem from './RepoItem';


function RepoList({ repos }) {

    const repoList = repos.map((repo) => {
        return (
            <RepoItem key={repo.id} repo={repo} />
        )
    })

    return (
        <div className='rounded-lg shadow-lg card bg-base-100'>
            <div className="card-body">
                <h2 className="text-3xl my-4 font-bold card-title">Latest Repositories</h2>
                {repoList}
            </div>
        </div>
    );
}

RepoList.propType = {
    repos: PropTypes.array.isRequired
}

export default RepoList;

